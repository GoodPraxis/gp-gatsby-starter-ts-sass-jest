for a in *.wav; do
  f="${a[@]/%wav/mp3}"
  ffmpeg -i "$a" -qscale:a 0 "$f"
done
