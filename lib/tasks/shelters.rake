namespace :shelters do
  desc "TODO"
  task import: :environment do
    require 'csv'

    file_name = "globalhack.csv"
    CSV.open(file_name, headers: true, header_converters: :symbol, converters: :all).to_a.map(&:to_hash).each do |shelter| 
      types = ["men", "women", "family"]
      shelter["icon"] = types[rand(3)]
      shelter["checkins"] = rand(shelter[:capacity])
      Shelter.create(shelter)
    end
  end

end
