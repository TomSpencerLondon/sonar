require 'rubygems'
require 'httparty'
require 'sinatra/base'

class App < Sinatra::Application

  class APIRequest
    include HTTParty

    def places(name)
      response = HTTParty.get("http://index1.homeflow.co.uk/places", :query => {:api_key => "77467477edfd2689cd77796a2c4b019f", :"search[name]" => name})
      response.body
    end

    def properties(place_id, channel, min_price, max_price)
      query = {:api_key => "77467477edfd2689cd77796a2c4b019f", :"search[place][id]" => place_id, :"search[channel]" => channel}
      query[:"search[min_price]"] = min_price if min_price != nil
      query[:"search[max_price]"] = max_price if max_price != nil
      response = HTTParty.get("http://index1.homeflow.co.uk/properties", :query => query)
      response.body
    end

  end

  api_request = APIRequest.new

  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  get '/places' do
    api_request.places(params['name'])
  end

  get '/properties' do
    api_request.properties(params['place_id'], params['channel'], params['min_price'], params['max_price'])
  end


  run! if app_file == $0

end
