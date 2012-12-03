require 'rake-pipeline'
require 'rake-pipeline/middleware'
use Rake::Pipeline::Middleware, Rake::Pipeline::Project.new("Assetfile")

# require 'rack/streaming_proxy'
# use Rack::StreamingProxy do |request|
#    if request.path.start_with?('/proxy')
#      "http://127.0.0.1:8080#{request.path}"
#    end
# end

use Rack::Static, :root => ".", 
                  :urls => ["/source"]

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('index.html', File::RDONLY)
  ]
}
