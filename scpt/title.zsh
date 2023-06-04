#!/bin/zsh
d=${0:a:h}
dd=${0:a:h:h}

url=syui.ai/img

case $OSTYPE in
	darwin*)
		path_nvm_sh="/opt/homebrew/opt/nvm/nvm.sh";;
	linux*)
		path_nvm_sh="";;
esac

json=$dd/public/json/manga.json
bg=$dd/public/wa/bg.png
bgg=$dd/public/wa/bg_og.png

convert -resize 3240x4320! $bg $bgg

n=`cat $json|jq "length"`
n=`expr $n - 1`

cd $dir
export NVM_DIR="$HOME/.nvm"
[ -s "$path_nvm_sh" ] && \. "$path_nvm_sh"
nvm use 17
nvm i squoosh-cli

for ((i=0;i<=$n;i++))
do
	illust=`cat $json|jq -r ".[$i].illust"`
	id=`cat $json|jq -r ".[$i].id"`
	s=$dd/public/wa/yui_${illust}
	o=$dd/public/wa/$id/0_test.png
	og=${s}_og.png
	f=$dd/public/wa/$id/0_font.png
	ff=$dd/public/wa/$id/0.png
	if [ ! -f $s ];then
		curl -sL https://syui.ai/img/yui_${illust}.png -o ${s}.png
	fi
	convert ${s}.png -gravity south -geometry 135%x135% -extent 3240x4320 $og

	magick composite $bgg -gravity north -geometry +0+0 $og $o
	convert -font "Meiryo" -pointsize 150 -fill black -gravity east -annotate +650-140 "$id" $o $f
	mv $f $ff
	rm $og $o ${s}.png
done
