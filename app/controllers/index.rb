get '/' do
  data = json_info
  erb :index
end

post '/' do
  # if request.xhr?
  
  # w_api = Wunderground.new

  # w_api.[date.hour]_for('params[:location]')



    @location = params[:location]
    w = WeatherUnderground::Base.new
    @alerts = w.SimpleForecast(@location).days
    @alerts.each do |day|
      p day.high.fahrenheit
    end
  erb :index
end

get '/weather' do
  @data = json_info
  if request.xhr?
    erb :weather, layout: false, locals: {data: data}
  end
end