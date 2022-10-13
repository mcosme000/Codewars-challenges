def generateHashtag(str)
  # ...
  if str == "" || str.length > 140
    false
  else
    hashtag = str.split(" ").map {|w| w.capitalize}.unshift("#").join("")
  end
end
