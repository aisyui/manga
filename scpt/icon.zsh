#!/bin/zsh

d=${0:a:h}
dd=${0:a:h:h}
icon=$dd/public/icon

echo $d
echo $dd
echo ---
api=api.syui.ai
avatar=`curl -sL $api/users/2/ma|jq -r ".[].avatar"`
n=`echo $avatar|wc -l`
for ((i=1;i<=$n;i++))
do
	img=`echo $avatar|awk "NR==$i"`
	did=`echo $img|cut -d / -f 7|cut -d : -f 3`
	echo $i
	echo $img
	echo $did
	f=$icon/$did.jpg
	if [ ! -f $f ];then
		curl -sL $img -o $icon/$did.jpg
	fi
done
