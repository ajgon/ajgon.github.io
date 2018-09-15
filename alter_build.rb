#!/usr/bin/env ruby

CSP_NONCE='9c737cda9c0353592e70a2213073d715bb26b45f'

Dir['public/*.map'].each do |path|
  File.write(path, File.read(path).gsub("#{Dir.pwd}/?", './'))
end

Dir['public/**/*.html'].each do |path|
  File.write(
    path,
    File.read(path).gsub('<script', "<script nonce=\"#{CSP_NONCE}\"")
                   .gsub('<style', "<style nonce=\"#{CSP_NONCE}\"")
  )
end
