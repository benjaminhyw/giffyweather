get '/' do
  data = json_info
  erb :index
end

get '/weather' do
  @data = json_info
  erb :weather
end

post '/' do
  @location = params[:location]
  w = WeatherUnderground::Base.new
  @alerts = w.SimpleForecast(@location).days
  @alerts.each do |day|
    p day.high.fahrenheit
  end

  # @alerts = w.CurrentObservations( zip )
  # p @alerts

  erb :index
end

