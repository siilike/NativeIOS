Pod::Spec.new do |s|
  s.name         = "NativeIos"
  s.version      = "1.0.0"
  s.summary      = ""
  s.homepage     = "https://www.github.com/modavi/native-ios"
  s.license      = { :type => "" }
  s.authors      = { "" => "" }
  s.platform     = :ios, "8.0"
  s.source       = { :path => "." }
  s.source_files = "ios", "ios/**/*.{h,m}"
  s.dependency 'React'end
