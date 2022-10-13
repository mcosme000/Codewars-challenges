def vaporcode(string)
  return string.upcase().gsub(/\s+/, '').split("").join("  ")
end