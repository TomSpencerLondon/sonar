require 'rubygems'
require 'httparty'
require 'sinatra'

class APIRequest
  include HTTParty
  # base_uri "http://index1.homeflow.co.uk"


  def places(name)
    # self.class.get("/places?api_key=77467477edfd2689cd77796a2c4b019f&search[name]=#{name}")
    response = HTTParty.get("http://index1.homeflow.co.uk/places", :query => {:api_key => "77467477edfd2689cd77796a2c4b019f", :"search[name]" => name})
    response.body
  end

  def properties(place_id, channel, min_price, max_price)
    p min_price
    p max_price
    query = {:api_key => "77467477edfd2689cd77796a2c4b019f", :"search[place][id]" => place_id, :"search[channel]" => channel}
    query[:"search[min_price]"] = min_price if min_price != nil
    query[:"search[max_price]"] = max_price if max_price != nil
    p query
    response = HTTParty.get("http://index1.homeflow.co.uk/properties", :query => query)


    #   ?api_key=77467477edfd2689cd77796a2c4b019f&search[place][id]=#{place_id}&search[channel]=#{channel}&search[min_price]=#{min_price}&search[max_price]=#{max_price}")
    # # HTTParty.post("http://rubygems.org/api/v1/gems/httparty/owners",
    # # :query => { :email => "alan+thinkvitamin@carsonified.com" })
    # # :query => { :"search[place][id]" => place_id, :"search[channel]" =>  }


    response.body
  end

  # def properties_choose(search_criter)
  #
  # end

end

# 51e7c36573dadaf60fee9b4d

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


# url = localhost:4567/properties
# localhost:4567/

#
# puts api_request.places
