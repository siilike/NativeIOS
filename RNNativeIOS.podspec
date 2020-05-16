
Pod::Spec.new do |s|
  s.name         = "RNNativeIOS"
  s.version      = "1.0.0"
  s.summary      = "RNNativeIOS"
  s.description  = <<-DESC
                  RNNativeIOS
                   DESC
  s.homepage     = "https://github.com/modavi/NativeIOS"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "modavi@github.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/modavi/RNNativeIOS.git", :tag => "master" }
  s.source_files  = "src/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end
