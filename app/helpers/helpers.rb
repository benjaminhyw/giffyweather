helpers do
  def json_info
    response = HTTParty.get("http://api.wunderground.com/api/#{ENV['WEATHER_SECRET']}/conditions/q/autoip.json")
  end
end
