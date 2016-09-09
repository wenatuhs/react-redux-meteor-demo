#!/usr/bin/env bash
source settings

# Prepare
ssh root@$IP mkdir -p /root/$APPNAME
scp ../*.tar.gz root@$IP:/root/$APPNAME
# Docker run
$(ssh root@$IP docker inspect -f='"{{ .State.Running }}"' $APPNAME 2> /dev/null)
if [[ $? -ne 0 ]]; then
  ssh root@$IP docker run -d \
    -e ROOT_URL=http://$IP \
    -e MONGO_URL="mongodb://$MONGO/$DBNAME?replicaSet=rs0" \
    -e MONGO_OPLOG_URL="mongodb://$MONGO/local?replicaSet=rs0" \
    -v /root/$APPNAME:/bundle \
    -p $PORT:80 \
    --name=$APPNAME \
    zhezhang/mdd:1.3
else
  ssh root@$IP docker restart $APPNAME
fi
