import * as THREE from 'three'

export const CITIES = {
  easy: [
    { name: 'New York', region: 'NY', country: 'USA', lat: 40.71, lon: -74.01 },
    { name: 'Los Angeles', region: 'CA', country: 'USA', lat: 34.05, lon: -118.24 },
    { name: 'Chicago', region: 'IL', country: 'USA', lat: 41.88, lon: -87.63 },
    { name: 'Toronto', region: 'ON', country: 'Canada', lat: 43.65, lon: -79.38 },
    { name: 'Mexico City', region: null, country: 'Mexico', lat: 19.43, lon: -99.13 },
    { name: 'São Paulo', region: null, country: 'Brazil', lat: -23.55, lon: -46.63 },
    { name: 'Buenos Aires', region: null, country: 'Argentina', lat: -34.61, lon: -58.38 },
    { name: 'London', region: null, country: 'UK', lat: 51.51, lon: -0.13 },
    { name: 'Paris', region: null, country: 'France', lat: 48.86, lon: 2.35 },
    { name: 'Berlin', region: null, country: 'Germany', lat: 52.52, lon: 13.40 },
    { name: 'Madrid', region: null, country: 'Spain', lat: 40.42, lon: -3.70 },
    { name: 'Rome', region: null, country: 'Italy', lat: 41.90, lon: 12.50 },
    { name: 'Amsterdam', region: null, country: 'Netherlands', lat: 52.37, lon: 4.90 },
    { name: 'Moscow', region: null, country: 'Russia', lat: 55.75, lon: 37.62 },
    { name: 'Istanbul', region: null, country: 'Turkey', lat: 41.01, lon: 28.95 },
    { name: 'Dubai', region: null, country: 'UAE', lat: 25.20, lon: 55.27 },
    { name: 'Cairo', region: null, country: 'Egypt', lat: 30.04, lon: 31.24 },
    { name: 'Nairobi', region: null, country: 'Kenya', lat: -1.29, lon: 36.82 },
    { name: 'Mumbai', region: null, country: 'India', lat: 19.08, lon: 72.88 },
    { name: 'Beijing', region: null, country: 'China', lat: 39.91, lon: 116.39 },
    { name: 'Tokyo', region: null, country: 'Japan', lat: 35.68, lon: 139.69 },
    { name: 'Seoul', region: null, country: 'South Korea', lat: 37.57, lon: 126.98 },
    { name: 'Bangkok', region: null, country: 'Thailand', lat: 13.75, lon: 100.52 },
    { name: 'Singapore', region: null, country: 'Singapore', lat: 1.35, lon: 103.82 },
    { name: 'Sydney', region: 'NSW', country: 'Australia', lat: -33.87, lon: 151.21 },
    { name: 'San Francisco', region: 'CA', country: 'USA', lat: 37.77, lon: -122.42 },
    { name: 'Melbourne', region: 'VIC', country: 'Australia', lat: -37.81, lon: 144.96 },
    { name: 'Washington DC', region: 'DC', country: 'USA', lat: 38.91, lon: -77.04 },
    { name: 'Delhi', region: null, country: 'India', lat: 28.61, lon: 77.21 },
    { name: 'Cape Town', region: null, country: 'South Africa', lat: -33.93, lon: 18.42 },
    { name: 'Santiago', region: null, country: 'Chile', lat: -33.46, lon: -70.65 },
    { name: 'Osaka', region: null, country: 'Japan', lat: 34.69, lon: 135.50 },
    { name: 'Lisbon', region: null, country: 'Portugal', lat: 38.72, lon: -9.14 },
    { name: 'Warsaw', region: null, country: 'Poland', lat: 52.23, lon: 21.01 },
    { name: 'Brussels', region: null, country: 'Belgium', lat: 50.85, lon: 4.35 },
    { name: 'Athens', region: null, country: 'Greece', lat: 37.98, lon: 23.73 },
    { name: 'Zurich', region: null, country: 'Switzerland', lat: 47.38, lon: 8.54 },
    { name: 'Budapest', region: null, country: 'Hungary', lat: 47.50, lon: 19.04 },
    { name: 'Prague', region: null, country: 'Czech Republic', lat: 50.08, lon: 14.44 },
    { name: 'Copenhagen', region: null, country: 'Denmark', lat: 55.68, lon: 12.57 },
    { name: 'Oslo', region: null, country: 'Norway', lat: 59.91, lon: 10.75 },
    { name: 'Helsinki', region: null, country: 'Finland', lat: 60.17, lon: 24.94 },
    { name: 'Kyiv', region: null, country: 'Ukraine', lat: 50.45, lon: 30.52 },
    { name: 'Hanoi', region: null, country: 'Vietnam', lat: 21.03, lon: 105.85 },
    { name: 'Taipei', region: null, country: 'Taiwan', lat: 25.03, lon: 121.56 },
    { name: 'Auckland', region: null, country: 'New Zealand', lat: -36.86, lon: 174.76 },
    { name: 'Casablanca', region: null, country: 'Morocco', lat: 33.59, lon: -7.62 },
  ],

  medium: [
    { name: 'Houston', region: 'TX', country: 'USA', lat: 29.76, lon: -95.37 },
    { name: 'Miami', region: 'FL', country: 'USA', lat: 25.77, lon: -80.19 },
    { name: 'Seattle', region: 'WA', country: 'USA', lat: 47.61, lon: -122.33 },
    { name: 'Atlanta', region: 'GA', country: 'USA', lat: 33.75, lon: -84.39 },
    { name: 'Denver', region: 'CO', country: 'USA', lat: 39.74, lon: -104.98 },
    { name: 'Boston', region: 'MA', country: 'USA', lat: 42.36, lon: -71.06 },
    { name: 'Vancouver', region: 'BC', country: 'Canada', lat: 49.25, lon: -123.12 },
    { name: 'São Paulo', region: null, country: 'Brazil', lat: -23.55, lon: -46.63 },
    { name: 'Rio de Janeiro', region: null, country: 'Brazil', lat: -22.91, lon: -43.17 },
    { name: 'Lagos', region: null, country: 'Nigeria', lat: 6.52, lon: 3.38 },
    { name: 'Johannesburg', region: null, country: 'South Africa', lat: -26.20, lon: 28.04 },
    { name: 'Cape Town', region: null, country: 'South Africa', lat: -33.93, lon: 18.42 },
    { name: 'Mumbai', region: null, country: 'India', lat: 19.08, lon: 72.88 },
    { name: 'Jakarta', region: null, country: 'Indonesia', lat: -6.21, lon: 106.85 },
    { name: 'Bangkok', region: null, country: 'Thailand', lat: 13.75, lon: 100.52 },
    { name: 'Shanghai', region: null, country: 'China', lat: 31.23, lon: 121.47 },
    { name: 'Hong Kong', region: null, country: 'China', lat: 22.32, lon: 114.17 },
    { name: 'Seoul', region: null, country: 'South Korea', lat: 37.57, lon: 126.98 },
    { name: 'Osaka', region: null, country: 'Japan', lat: 34.69, lon: 135.50 },
    { name: 'Madrid', region: null, country: 'Spain', lat: 40.42, lon: -3.70 },
    { name: 'Rome', region: null, country: 'Italy', lat: 41.90, lon: 12.50 },
    { name: 'Vienna', region: null, country: 'Austria', lat: 48.21, lon: 16.37 },
    { name: 'Stockholm', region: null, country: 'Sweden', lat: 59.33, lon: 18.07 },
    { name: 'Warsaw', region: null, country: 'Poland', lat: 52.23, lon: 21.01 },
    { name: 'Lisbon', region: null, country: 'Portugal', lat: 38.72, lon: -9.14 },
    { name: 'Tehran', region: null, country: 'Iran', lat: 35.69, lon: 51.39 },
    { name: 'Riyadh', region: null, country: 'Saudi Arabia', lat: 24.69, lon: 46.72 },
    { name: 'Bogotá', region: null, country: 'Colombia', lat: 4.71, lon: -74.07 },
    { name: 'Lima', region: null, country: 'Peru', lat: -12.05, lon: -77.04 },
    { name: 'Santiago', region: null, country: 'Chile', lat: -33.46, lon: -70.65 },
    { name: 'Karachi', region: null, country: 'Pakistan', lat: 24.86, lon: 67.01 },
    { name: 'Manila', region: null, country: 'Philippines', lat: 14.60, lon: 120.98 },
    { name: 'Kuala Lumpur', region: null, country: 'Malaysia', lat: 3.14, lon: 101.69 },
    { name: 'Cairo', region: null, country: 'Egypt', lat: 30.04, lon: 31.24 },
    { name: 'Nairobi', region: null, country: 'Kenya', lat: -1.29, lon: 36.82 },
    { name: 'San Diego', region: 'CA', country: 'USA', lat: 32.72, lon: -117.15 },
    { name: 'Phoenix', region: 'AZ', country: 'USA', lat: 33.45, lon: -112.07 },
    { name: 'Dallas', region: 'TX', country: 'USA', lat: 32.78, lon: -96.80 },
    { name: 'Las Vegas', region: 'NV', country: 'USA', lat: 36.17, lon: -115.14 },
    { name: 'Nashville', region: 'TN', country: 'USA', lat: 36.17, lon: -86.78 },
    { name: 'Portland', region: 'OR', country: 'USA', lat: 45.52, lon: -122.68 },
    { name: 'New Orleans', region: 'LA', country: 'USA', lat: 29.95, lon: -90.07 },
    { name: 'Detroit', region: 'MI', country: 'USA', lat: 42.33, lon: -83.05 },
    { name: 'Philadelphia', region: 'PA', country: 'USA', lat: 39.95, lon: -75.17 },
    { name: 'San Antonio', region: 'TX', country: 'USA', lat: 29.42, lon: -98.49 },
    { name: 'Quebec City', region: 'QC', country: 'Canada', lat: 46.81, lon: -71.21 },
    { name: 'Winnipeg', region: 'MB', country: 'Canada', lat: 49.90, lon: -97.14 },
    { name: 'Monterrey', region: null, country: 'Mexico', lat: 25.67, lon: -100.31 },
    { name: 'Medellín', region: null, country: 'Colombia', lat: 6.25, lon: -75.56 },
    { name: 'Guayaquil', region: null, country: 'Ecuador', lat: -2.19, lon: -79.89 },
    { name: 'Fortaleza', region: null, country: 'Brazil', lat: -3.72, lon: -38.54 },
    { name: 'Recife', region: null, country: 'Brazil', lat: -8.05, lon: -34.88 },
    { name: 'Manaus', region: null, country: 'Brazil', lat: -3.10, lon: -60.03 },
    { name: 'Asunción', region: null, country: 'Paraguay', lat: -25.29, lon: -57.65 },
    { name: 'Abidjan', region: null, country: 'Ivory Coast', lat: 5.36, lon: -4.01 },
    { name: 'Kampala', region: null, country: 'Uganda', lat: 0.32, lon: 32.58 },
    { name: 'Maputo', region: null, country: 'Mozambique', lat: -25.97, lon: 32.59 },
    { name: 'Harare', region: null, country: 'Zimbabwe', lat: -17.83, lon: 31.05 },
    { name: 'Algiers', region: null, country: 'Algeria', lat: 36.74, lon: 3.06 },
    { name: 'Tripoli', region: null, country: 'Libya', lat: 32.90, lon: 13.18 },
    { name: 'Rabat', region: null, country: 'Morocco', lat: 34.01, lon: -6.83 },
    { name: 'Beirut', region: null, country: 'Lebanon', lat: 33.89, lon: 35.50 },
    { name: 'Damascus', region: null, country: 'Syria', lat: 33.51, lon: 36.29 },
    { name: 'Kabul', region: null, country: 'Afghanistan', lat: 34.53, lon: 69.17 },
    { name: 'Kathmandu', region: null, country: 'Nepal', lat: 27.71, lon: 85.31 },
    { name: 'Yangon', region: null, country: 'Myanmar', lat: 16.87, lon: 96.19 },
    { name: 'Phnom Penh', region: null, country: 'Cambodia', lat: 11.56, lon: 104.92 },
    { name: 'Vientiane', region: null, country: 'Laos', lat: 17.97, lon: 102.60 },
    { name: 'Almaty', region: null, country: 'Kazakhstan', lat: 43.24, lon: 76.89 },
    { name: 'Baku', region: null, country: 'Azerbaijan', lat: 40.41, lon: 49.87 },
    { name: 'Tbilisi', region: null, country: 'Georgia', lat: 41.69, lon: 44.83 },
    { name: 'Yerevan', region: null, country: 'Armenia', lat: 40.18, lon: 44.51 },
    { name: 'Minsk', region: null, country: 'Belarus', lat: 53.90, lon: 27.57 },
    { name: 'Riga', region: null, country: 'Latvia', lat: 56.95, lon: 24.11 },
    { name: 'Vilnius', region: null, country: 'Lithuania', lat: 54.69, lon: 25.28 },
    { name: 'Tallinn', region: null, country: 'Estonia', lat: 59.44, lon: 24.75 },
    { name: 'Belgrade', region: null, country: 'Serbia', lat: 44.80, lon: 20.46 },
    { name: 'Zagreb', region: null, country: 'Croatia', lat: 45.81, lon: 15.98 },
    { name: 'Sofia', region: null, country: 'Bulgaria', lat: 42.70, lon: 23.32 },
    { name: 'Islamabad', region: null, country: 'Pakistan', lat: 33.72, lon: 73.06 },
    { name: 'Naypyidaw', region: null, country: 'Myanmar', lat: 19.76, lon: 96.08 },
    { name: 'Taipei', region: null, country: 'Taiwan', lat: 25.03, lon: 121.56 },
    { name: 'Perth', region: 'WA', country: 'Australia', lat: -31.95, lon: 115.86 },
    { name: 'Havana', region: null, country: 'Cuba', lat: 23.14, lon: -82.36 },
    { name: 'San José', region: null, country: 'Costa Rica', lat: 9.93, lon: -84.08 },
  ],

  hard: [
    { name: 'Guadalajara', region: null, country: 'Mexico', lat: 20.66, lon: -103.35 },
    { name: 'Havana', region: null, country: 'Cuba', lat: 23.14, lon: -82.36 },
    { name: 'Guatemala City', region: null, country: 'Guatemala', lat: 14.64, lon: -90.51 },
    { name: 'Panama City', region: null, country: 'Panama', lat: 8.99, lon: -79.52 },
    { name: 'Quito', region: null, country: 'Ecuador', lat: -0.23, lon: -78.52 },
    { name: 'La Paz', region: null, country: 'Bolivia', lat: -16.50, lon: -68.15 },
    { name: 'Caracas', region: null, country: 'Venezuela', lat: 10.48, lon: -66.88 },
    { name: 'Montevideo', region: null, country: 'Uruguay', lat: -34.90, lon: -56.19 },
    { name: 'Dakar', region: null, country: 'Senegal', lat: 14.72, lon: -17.47 },
    { name: 'Accra', region: null, country: 'Ghana', lat: 5.56, lon: -0.20 },
    { name: 'Addis Ababa', region: null, country: 'Ethiopia', lat: 9.03, lon: 38.74 },
    { name: 'Dar es Salaam', region: null, country: 'Tanzania', lat: -6.79, lon: 39.21 },
    { name: 'Luanda', region: null, country: 'Angola', lat: -8.84, lon: 13.23 },
    { name: 'Khartoum', region: null, country: 'Sudan', lat: 15.55, lon: 32.53 },
    { name: 'Tunis', region: null, country: 'Tunisia', lat: 36.82, lon: 10.17 },
    { name: 'Casablanca', region: null, country: 'Morocco', lat: 33.59, lon: -7.62 },
    { name: 'Amman', region: null, country: 'Jordan', lat: 31.96, lon: 35.95 },
    { name: 'Baghdad', region: null, country: 'Iraq', lat: 33.34, lon: 44.40 },
    { name: 'Tel Aviv', region: null, country: 'Israel', lat: 32.09, lon: 34.79 },
    { name: 'St. Petersburg', region: null, country: 'Russia', lat: 59.93, lon: 30.32 },
    { name: 'Bucharest', region: null, country: 'Romania', lat: 44.43, lon: 26.10 },
    { name: 'Budapest', region: null, country: 'Hungary', lat: 47.50, lon: 19.04 },
    { name: 'Copenhagen', region: null, country: 'Denmark', lat: 55.68, lon: 12.57 },
    { name: 'Helsinki', region: null, country: 'Finland', lat: 60.17, lon: 24.94 },
    { name: 'Oslo', region: null, country: 'Norway', lat: 59.91, lon: 10.75 },
    { name: 'Zurich', region: null, country: 'Switzerland', lat: 47.38, lon: 8.54 },
    { name: 'Athens', region: null, country: 'Greece', lat: 37.98, lon: 23.73 },
    { name: 'Kyiv', region: null, country: 'Ukraine', lat: 50.45, lon: 30.52 },
    { name: 'Tashkent', region: null, country: 'Uzbekistan', lat: 41.30, lon: 69.24 },
    { name: 'Dhaka', region: null, country: 'Bangladesh', lat: 23.81, lon: 90.41 },
    { name: 'Kolkata', region: null, country: 'India', lat: 22.57, lon: 88.36 },
    { name: 'Bangalore', region: null, country: 'India', lat: 12.97, lon: 77.59 },
    { name: 'Ho Chi Minh City', region: null, country: 'Vietnam', lat: 10.82, lon: 106.63 },
    { name: 'Colombo', region: null, country: 'Sri Lanka', lat: 6.93, lon: 79.86 },
    { name: 'Minneapolis', region: 'MN', country: 'USA', lat: 44.98, lon: -93.27 },
    { name: 'Calgary', region: 'AB', country: 'Canada', lat: 51.05, lon: -114.07 },
    { name: 'Montreal', region: 'QC', country: 'Canada', lat: 45.50, lon: -73.57 },
    { name: 'Brisbane', region: 'QLD', country: 'Australia', lat: -27.47, lon: 153.02 },
    { name: 'Auckland', region: null, country: 'New Zealand', lat: -36.86, lon: 174.76 },
    { name: 'Perth', region: 'WA', country: 'Australia', lat: -31.95, lon: 115.86 },
    { name: 'Salt Lake City', region: 'UT', country: 'USA', lat: 40.76, lon: -111.89 },
    { name: 'Kansas City', region: 'MO', country: 'USA', lat: 39.10, lon: -94.58 },
    { name: 'Tampa', region: 'FL', country: 'USA', lat: 27.95, lon: -82.46 },
    { name: 'Pittsburgh', region: 'PA', country: 'USA', lat: 40.44, lon: -79.99 },
    { name: 'Cincinnati', region: 'OH', country: 'USA', lat: 39.10, lon: -84.51 },
    { name: 'Indianapolis', region: 'IN', country: 'USA', lat: 39.77, lon: -86.16 },
    { name: 'Columbus', region: 'OH', country: 'USA', lat: 39.96, lon: -82.99 },
    { name: 'Baltimore', region: 'MD', country: 'USA', lat: 39.29, lon: -76.61 },
    { name: 'Charlotte', region: 'NC', country: 'USA', lat: 35.23, lon: -80.84 },
    { name: 'Raleigh', region: 'NC', country: 'USA', lat: 35.78, lon: -78.64 },
    { name: 'Halifax', region: 'NS', country: 'Canada', lat: 44.65, lon: -63.58 },
    { name: 'Edmonton', region: 'AB', country: 'Canada', lat: 53.55, lon: -113.49 },
    { name: 'Ottawa', region: 'ON', country: 'Canada', lat: 45.42, lon: -75.70 },
    { name: 'Tegucigalpa', region: null, country: 'Honduras', lat: 14.07, lon: -87.21 },
    { name: 'Managua', region: null, country: 'Nicaragua', lat: 12.13, lon: -86.28 },
    { name: 'Santo Domingo', region: null, country: 'Dominican Republic', lat: 18.49, lon: -69.90 },
    { name: 'Port-au-Prince', region: null, country: 'Haiti', lat: 18.54, lon: -72.34 },
    { name: 'Kingston', region: null, country: 'Jamaica', lat: 17.99, lon: -76.79 },
    { name: 'Cali', region: null, country: 'Colombia', lat: 3.44, lon: -76.52 },
    { name: 'Barranquilla', region: null, country: 'Colombia', lat: 10.96, lon: -74.80 },
    { name: 'Maracaibo', region: null, country: 'Venezuela', lat: 10.63, lon: -71.64 },
    { name: 'Santa Cruz', region: null, country: 'Bolivia', lat: -17.79, lon: -63.18 },
    { name: 'Cochabamba', region: null, country: 'Bolivia', lat: -17.39, lon: -66.16 },
    { name: 'Georgetown', region: null, country: 'Guyana', lat: 6.80, lon: -58.16 },
    { name: 'Puerto Montt', region: null, country: 'Chile', lat: -41.47, lon: -72.94 },
    { name: 'Punta Arenas', region: null, country: 'Chile', lat: -53.15, lon: -70.92 },
    { name: 'Douala', region: null, country: 'Cameroon', lat: 4.05, lon: 9.70 },
    { name: 'Yaoundé', region: null, country: 'Cameroon', lat: 3.87, lon: 11.52 },
    { name: 'Kinshasa', region: null, country: 'DR Congo', lat: -4.32, lon: 15.32 },
    { name: 'Brazzaville', region: null, country: 'Republic of Congo', lat: -4.27, lon: 15.28 },
    { name: 'Abidjan', region: null, country: 'Ivory Coast', lat: 5.36, lon: -4.01 },
    { name: 'Accra', region: null, country: 'Ghana', lat: 5.56, lon: -0.20 },
    { name: 'Lomé', region: null, country: 'Togo', lat: 6.14, lon: 1.22 },
    { name: 'Cotonou', region: null, country: 'Benin', lat: 6.37, lon: 2.42 },
    { name: 'Kampala', region: null, country: 'Uganda', lat: 0.32, lon: 32.58 },
    { name: 'Kigali', region: null, country: 'Rwanda', lat: -1.94, lon: 30.06 },
    { name: 'Harare', region: null, country: 'Zimbabwe', lat: -17.83, lon: 31.05 },
    { name: 'Maputo', region: null, country: 'Mozambique', lat: -25.97, lon: 32.59 },
    { name: 'Algiers', region: null, country: 'Algeria', lat: 36.74, lon: 3.06 },
    { name: 'Tripoli', region: null, country: 'Libya', lat: 32.90, lon: 13.18 },
    { name: 'Rabat', region: null, country: 'Morocco', lat: 34.01, lon: -6.83 },
    { name: 'Beirut', region: null, country: 'Lebanon', lat: 33.89, lon: 35.50 },
    { name: 'Damascus', region: null, country: 'Syria', lat: 33.51, lon: 36.29 },
    { name: 'Tbilisi', region: null, country: 'Georgia', lat: 41.69, lon: 44.83 },
    { name: 'Yerevan', region: null, country: 'Armenia', lat: 40.18, lon: 44.51 },
    { name: 'Almaty', region: null, country: 'Kazakhstan', lat: 43.24, lon: 76.89 },
    { name: 'Ljubljana', region: null, country: 'Slovenia', lat: 46.05, lon: 14.51 },
    { name: 'Sarajevo', region: null, country: 'Bosnia', lat: 43.85, lon: 18.36 },
    { name: 'Skopje', region: null, country: 'North Macedonia', lat: 41.99, lon: 21.43 },
    { name: 'Tirana', region: null, country: 'Albania', lat: 41.33, lon: 19.82 },
  ],

  impossible: [
    { name: 'Ulaanbaatar', region: null, country: 'Mongolia', lat: 47.89, lon: 106.91 },
    { name: 'Bishkek', region: null, country: 'Kyrgyzstan', lat: 42.87, lon: 74.59 },
    { name: 'Dushanbe', region: null, country: 'Tajikistan', lat: 38.56, lon: 68.77 },
    { name: 'Ashgabat', region: null, country: 'Turkmenistan', lat: 37.95, lon: 58.38 },
    { name: 'Nukus', region: null, country: 'Uzbekistan', lat: 42.46, lon: 59.61 },
    { name: 'Yakutsk', region: null, country: 'Russia', lat: 62.03, lon: 129.73 },
    { name: 'Norilsk', region: null, country: 'Russia', lat: 69.35, lon: 88.19 },
    { name: 'Magadan', region: null, country: 'Russia', lat: 59.57, lon: 150.79 },
    { name: 'Iqaluit', region: 'NU', country: 'Canada', lat: 63.75, lon: -68.51 },
    { name: 'Yellowknife', region: 'NT', country: 'Canada', lat: 62.45, lon: -114.37 },
    { name: 'Whitehorse', region: 'YT', country: 'Canada', lat: 60.72, lon: -135.05 },
    { name: 'Manaus', region: null, country: 'Brazil', lat: -3.10, lon: -60.03 },
    { name: 'Belém', region: null, country: 'Brazil', lat: -1.46, lon: -48.50 },
    { name: 'Fortaleza', region: null, country: 'Brazil', lat: -3.72, lon: -38.54 },
    { name: 'Recife', region: null, country: 'Brazil', lat: -8.05, lon: -34.88 },
    { name: 'Antofagasta', region: null, country: 'Chile', lat: -23.65, lon: -70.40 },
    { name: 'Iquitos', region: null, country: 'Peru', lat: -3.75, lon: -73.25 },
    { name: 'Paramaribo', region: null, country: 'Suriname', lat: 5.87, lon: -55.17 },
    { name: 'Cayenne', region: null, country: 'French Guiana', lat: 4.93, lon: -52.33 },
    { name: 'Libreville', region: null, country: 'Gabon', lat: 0.39, lon: 9.45 },
    { name: 'Bangui', region: null, country: 'Central African Republic', lat: 4.36, lon: 18.55 },
    { name: "N'Djamena", region: null, country: 'Chad', lat: 12.11, lon: 15.04 },
    { name: 'Niamey', region: null, country: 'Niger', lat: 13.51, lon: 2.11 },
    { name: 'Ouagadougou', region: null, country: 'Burkina Faso', lat: 12.37, lon: -1.53 },
    { name: 'Conakry', region: null, country: 'Guinea', lat: 9.54, lon: -13.68 },
    { name: 'Freetown', region: null, country: 'Sierra Leone', lat: 8.49, lon: -13.23 },
    { name: 'Monrovia', region: null, country: 'Liberia', lat: 6.31, lon: -10.80 },
    { name: 'Banjul', region: null, country: 'Gambia', lat: 13.45, lon: -16.58 },
    { name: 'Bissau', region: null, country: 'Guinea-Bissau', lat: 11.86, lon: -15.60 },
    { name: 'Porto-Novo', region: null, country: 'Benin', lat: 6.49, lon: 2.63 },
    { name: 'Gitega', region: null, country: 'Burundi', lat: -3.43, lon: 29.93 },
    { name: 'Dodoma', region: null, country: 'Tanzania', lat: -6.17, lon: 35.74 },
    { name: 'Lilongwe', region: null, country: 'Malawi', lat: -13.97, lon: 33.79 },
    { name: 'Lusaka', region: null, country: 'Zambia', lat: -15.42, lon: 28.28 },
    { name: 'Windhoek', region: null, country: 'Namibia', lat: -22.56, lon: 17.08 },
    { name: 'Gaborone', region: null, country: 'Botswana', lat: -24.65, lon: 25.91 },
    { name: 'Maseru', region: null, country: 'Lesotho', lat: -29.32, lon: 27.48 },
    { name: 'Mbabane', region: null, country: 'Eswatini', lat: -26.32, lon: 31.14 },
    { name: 'Antananarivo', region: null, country: 'Madagascar', lat: -18.91, lon: 47.54 },
    { name: 'Moroni', region: null, country: 'Comoros', lat: -11.70, lon: 43.26 },
    { name: 'Port Louis', region: null, country: 'Mauritius', lat: -20.16, lon: 57.50 },
    { name: 'Djibouti', region: null, country: 'Djibouti', lat: 11.59, lon: 43.15 },
    { name: 'Asmara', region: null, country: 'Eritrea', lat: 15.34, lon: 38.93 },
    { name: 'Juba', region: null, country: 'South Sudan', lat: 4.85, lon: 31.60 },
    { name: 'Mogadishu', region: null, country: 'Somalia', lat: 2.05, lon: 45.34 },
    { name: 'Honiara', region: null, country: 'Solomon Islands', lat: -9.43, lon: 160.05 },
    { name: 'Port Moresby', region: null, country: 'Papua New Guinea', lat: -9.44, lon: 147.18 },
    { name: "Nuku'alofa", region: null, country: 'Tonga', lat: -21.13, lon: -175.20 },
    { name: 'Apia', region: null, country: 'Samoa', lat: -13.83, lon: -171.77 },
    { name: 'Funafuti', region: null, country: 'Tuvalu', lat: -8.52, lon: 179.20 },
    { name: 'Tarawa', region: null, country: 'Kiribati', lat: 1.33, lon: 173.00 },
    { name: 'Majuro', region: null, country: 'Marshall Islands', lat: 7.09, lon: 171.38 },
    { name: 'Palikir', region: null, country: 'Micronesia', lat: 6.92, lon: 158.16 },
    { name: 'Andorra la Vella', region: null, country: 'Andorra', lat: 42.51, lon: 1.52 },
    { name: 'Vaduz', region: null, country: 'Liechtenstein', lat: 47.14, lon: 9.52 },
    { name: 'San Marino', region: null, country: 'San Marino', lat: 43.94, lon: 12.45 },
    { name: 'Monaco', region: null, country: 'Monaco', lat: 43.74, lon: 7.42 },
    { name: 'Luxembourg', region: null, country: 'Luxembourg', lat: 49.61, lon: 6.13 },
    { name: 'Bern', region: null, country: 'Switzerland', lat: 46.95, lon: 7.45 },
    { name: 'Stanley', region: null, country: 'Falkland Islands', lat: -51.70, lon: -57.85 },
    { name: 'Ushuaia', region: null, country: 'Argentina', lat: -54.80, lon: -68.30 },
    { name: 'Iquique', region: null, country: 'Chile', lat: -20.21, lon: -70.15 },
    { name: 'Antofagasta', region: null, country: 'Chile', lat: -23.65, lon: -70.40 },
    { name: 'Sucre', region: null, country: 'Bolivia', lat: -19.04, lon: -65.26 },
    { name: 'Iquitos', region: null, country: 'Peru', lat: -3.75, lon: -73.25 },
    { name: 'Paramaribo', region: null, country: 'Suriname', lat: 5.87, lon: -55.17 },
    { name: 'Cayenne', region: null, country: 'French Guiana', lat: 4.93, lon: -52.33 },
    { name: 'Bridgetown', region: null, country: 'Barbados', lat: 13.10, lon: -59.62 },
    { name: 'Port of Spain', region: null, country: 'Trinidad and Tobago', lat: 10.65, lon: -61.52 },
    { name: 'Nassau', region: null, country: 'Bahamas', lat: 25.05, lon: -77.35 },
    { name: 'Belmopan', region: null, country: 'Belize', lat: 17.25, lon: -88.77 },
    { name: 'Roseau', region: null, country: 'Dominica', lat: 15.30, lon: -61.39 },
    { name: 'Castries', region: null, country: 'Saint Lucia', lat: 14.01, lon: -60.99 },
    { name: 'Kingstown', region: null, country: 'Saint Vincent', lat: 13.16, lon: -61.22 },
    { name: "St. George's", region: null, country: 'Grenada', lat: 12.05, lon: -61.75 },
    { name: "St. John's", region: null, country: 'Antigua and Barbuda', lat: 17.12, lon: -61.85 },
    { name: 'Basseterre', region: null, country: 'Saint Kitts and Nevis', lat: 17.30, lon: -62.72 },
    { name: 'Oranjestad', region: null, country: 'Aruba', lat: 12.52, lon: -70.03 },
    { name: 'Willemstad', region: null, country: 'Curaçao', lat: 12.11, lon: -68.93 },
    { name: 'Victoria', region: null, country: 'Seychelles', lat: -4.62, lon: 55.45 },
    { name: 'São Tomé', region: null, country: 'São Tomé and Príncipe', lat: 0.34, lon: 6.73 },
    { name: 'Malabo', region: null, country: 'Equatorial Guinea', lat: 3.75, lon: 8.78 },
    { name: 'Bamako', region: null, country: 'Mali', lat: 12.65, lon: -8.00 },
    { name: 'Nouakchott', region: null, country: 'Mauritania', lat: 18.08, lon: -15.97 },
    { name: 'Praia', region: null, country: 'Cape Verde', lat: 14.93, lon: -23.51 },
    { name: 'Yamoussoukro', region: null, country: 'Ivory Coast', lat: 6.82, lon: -5.27 },
    { name: 'Lomé', region: null, country: 'Togo', lat: 6.14, lon: 1.22 },
    { name: 'Cotonou', region: null, country: 'Benin', lat: 6.37, lon: 2.42 },
    { name: 'Kigali', region: null, country: 'Senegal', lat: -1.94, lon: 30.06 },
    { name: 'Bujumbura', region: null, country: 'Burundi', lat: -3.38, lon: 29.36 },
    { name: 'Lilongwe', region: null, country: 'Malawi', lat: -13.97, lon: 33.79 },
    { name: 'Lusaka', region: null, country: 'Zambia', lat: -15.42, lon: 28.28 },
    { name: 'Windhoek', region: null, country: 'Namibia', lat: -22.56, lon: 17.08 },
    { name: 'Gaborone', region: null, country: 'Botswana', lat: -24.65, lon: 25.91 },
    { name: 'Maseru', region: null, country: 'Lesotho', lat: -29.32, lon: 27.48 },
    { name: 'Mbabane', region: null, country: 'Eswatini', lat: -26.32, lon: 31.14 },
    { name: 'Antananarivo', region: null, country: 'Madagascar', lat: -18.91, lon: 47.54 },
    { name: 'Moroni', region: null, country: 'Comoros', lat: -11.70, lon: 43.26 },
    { name: 'Port Louis', region: null, country: 'Mauritius', lat: -20.16, lon: 57.50 },
    { name: 'Mamoudzou', region: null, country: 'Mayotte', lat: -12.78, lon: 45.23 },
    { name: 'Djibouti', region: null, country: 'Djibouti', lat: 11.59, lon: 43.15 },
    { name: 'Asmara', region: null, country: 'Eritrea', lat: 15.34, lon: 38.93 },
    { name: 'Juba', region: null, country: 'South Sudan', lat: 4.85, lon: 31.60 },
    { name: 'Mogadishu', region: null, country: 'Somalia', lat: 2.05, lon: 45.34 },
    { name: 'Honiara', region: null, country: 'Solomon Islands', lat: -9.43, lon: 160.05 },
    { name: 'Port Moresby', region: null, country: 'Papua New Guinea', lat: -9.44, lon: 147.18 },
    { name: "Nuku'alofa", region: null, country: 'Tonga', lat: -21.13, lon: -175.20 },
    { name: 'Apia', region: null, country: 'Samoa', lat: -13.83, lon: -171.77 },
    { name: 'Funafuti', region: null, country: 'Tuvalu', lat: -8.52, lon: 179.20 },
    { name: 'Tarawa', region: null, country: 'Kiribati', lat: 1.33, lon: 173.00 },
    { name: 'Majuro', region: null, country: 'Marshall Islands', lat: 7.09, lon: 171.38 },
    { name: 'Palikir', region: null, country: 'Micronesia', lat: 6.92, lon: 158.16 },
    { name: 'Ngerulmud', region: null, country: 'Palau', lat: 7.50, lon: 134.62 },
    { name: 'Yaren', region: null, country: 'Nauru', lat: -0.55, lon: 166.92 },
    { name: 'Pago Pago', region: null, country: 'American Samoa', lat: -14.28, lon: -170.70 },
    { name: 'Hagåtña', region: null, country: 'Guam', lat: 13.48, lon: 144.75 },
    { name: 'Avarua', region: null, country: 'Cook Islands', lat: -21.21, lon: -159.78 },
    { name: 'Alofi', region: null, country: 'Niue', lat: -19.06, lon: -169.92 },
    { name: 'Adamstown', region: null, country: 'Pitcairn Islands', lat: -25.07, lon: -130.10 },
    { name: 'Flying Fish Cove', region: null, country: 'Christmas Island', lat: -10.42, lon: 105.68 },
    { name: 'West Island', region: null, country: 'Cocos Islands', lat: -12.17, lon: 96.83 },
    { name: 'Jamestown', region: null, country: 'Saint Helena', lat: -15.93, lon: -5.72 },
    { name: 'Georgetown', region: null, country: 'Ascension Island', lat: -7.92, lon: -14.42 },
    { name: 'Edinburgh of the Seven Seas', region: null, country: 'Tristan da Cunha', lat: -37.07, lon: -12.31 },
    { name: 'Longyearbyen', region: null, country: 'Svalbard', lat: 78.22, lon: 15.65 },
    { name: 'Nuuk', region: null, country: 'Greenland', lat: 64.18, lon: -51.74 },
    { name: 'Torshavn', region: null, country: 'Faroe Islands', lat: 62.01, lon: -6.77 },
    { name: 'Douglas', region: null, country: 'Isle of Man', lat: 54.15, lon: -4.48 },
    { name: 'St. Helier', region: null, country: 'Jersey', lat: 49.19, lon: -2.11 },
    { name: 'St. Peter Port', region: null, country: 'Guernsey', lat: 49.46, lon: -2.54 },
    { name: 'Mariehamn', region: null, country: 'Åland Islands', lat: 60.10, lon: 19.94 },
    { name: 'Nukus', region: null, country: 'Uzbekistan', lat: 42.46, lon: 59.61 },
    { name: 'Yakutsk', region: null, country: 'Russia', lat: 62.03, lon: 129.73 },
    { name: 'Norilsk', region: null, country: 'Russia', lat: 69.35, lon: 88.19 },
    { name: 'Magadan', region: null, country: 'Russia', lat: 59.57, lon: 150.79 },
    { name: 'Murmansk', region: null, country: 'Russia', lat: 68.97, lon: 33.07 },
    { name: 'Petropavlovsk-Kamchatsky', region: null, country: 'Russia', lat: 53.01, lon: 158.65 },
    { name: 'Vladivostok', region: null, country: 'Russia', lat: 43.13, lon: 131.91 },
    { name: 'Khabarovsk', region: null, country: 'Russia', lat: 48.48, lon: 135.08 },
    { name: 'Iqaluit', region: 'NU', country: 'Canada', lat: 63.75, lon: -68.51 },
    { name: 'Yellowknife', region: 'NT', country: 'Canada', lat: 62.45, lon: -114.37 },
    { name: 'Whitehorse', region: 'YT', country: 'Canada', lat: 60.72, lon: -135.05 },
    { name: 'Inuvik', region: 'NT', country: 'Canada', lat: 68.36, lon: -133.72 },
    { name: 'Churchill', region: 'MB', country: 'Canada', lat: 58.77, lon: -94.17 },
    { name: 'Resolute', region: 'NU', country: 'Canada', lat: 74.70, lon: -94.83 },
    { name: 'Belém', region: null, country: 'Brazil', lat: -1.46, lon: -48.50 },
    { name: 'Bangui', region: null, country: 'Central African Republic', lat: 4.36, lon: 18.55 },
    { name: "N'Djamena", region: null, country: 'Chad', lat: 12.11, lon: 15.04 },
    { name: 'Niamey', region: null, country: 'Niger', lat: 13.51, lon: 2.11 },
    { name: 'Ouagadougou', region: null, country: 'Burkina Faso', lat: 12.37, lon: -1.53 },
    { name: 'Conakry', region: null, country: 'Guinea', lat: 9.54, lon: -13.68 },
    { name: 'Freetown', region: null, country: 'Sierra Leone', lat: 8.49, lon: -13.23 },
    { name: 'Monrovia', region: null, country: 'Liberia', lat: 6.31, lon: -10.80 },
    { name: 'Banjul', region: null, country: 'Gambia', lat: 13.45, lon: -16.58 },
    { name: 'Bissau', region: null, country: 'Guinea-Bissau', lat: 11.86, lon: -15.60 },
  ]
}

function latLonToVec3(latDeg, lonDeg, radius) {
  const lat = latDeg * Math.PI / 180
  const lon = lonDeg * Math.PI / 180
  const r = radius + 0.06
  return new THREE.Vector3(
    r * Math.cos(lat) * Math.cos(lon),
    r * Math.sin(lat),
    -r * Math.cos(lat) * Math.sin(lon)
  )
}

export function createCityPins(scene, radius = 2.5) {
  return []
}

export function showCityReveal(scene, city, radius, packageLatDeg, packageLonDeg, durationMs = 4000, miles = 0) {
  const cityPos = latLonToVec3(city.lat, city.lon, radius)
  const normal = cityPos.clone().normalize()

  const dotGeo = new THREE.SphereGeometry(0.015, 8, 8)
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 1 })
  const dot = new THREE.Mesh(dotGeo, dotMat)
  dot.position.copy(cityPos)
  scene.add(dot)

  const ringGeo = new THREE.RingGeometry(0.04, 0.06, 32)
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xff4444,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9
  })
  const ring = new THREE.Mesh(ringGeo, ringMat)
  ring.position.copy(cityPos)
  ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
  scene.add(ring)

  const objects = [
    { mesh: dot, mat: dotMat },
    { mesh: ring, mat: ringMat }
  ]

  if (miles > 100) {
    const pkgLat = packageLatDeg * Math.PI / 180
    const pkgLon = packageLonDeg * Math.PI / 180
    const pkgPos = new THREE.Vector3(
      (radius + 0.06) * Math.cos(pkgLat) * Math.cos(pkgLon),
      (radius + 0.06) * Math.sin(pkgLat),
      -(radius + 0.06) * Math.cos(pkgLat) * Math.sin(pkgLon)
    )

    const arcPoints = []
    const start = pkgPos.clone().normalize()
    const end = cityPos.clone().normalize()
    for (let i = 0; i <= 60; i++) {
      const t = i / 60
      const point = new THREE.Vector3().copy(start).lerp(end, t).normalize()
      point.multiplyScalar(radius + 0.06 + Math.sin(t * Math.PI) * 0.15)
      arcPoints.push(point)
    }

    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints)
    const arcMat = new THREE.LineBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.8 })
    const arc = new THREE.Line(arcGeo, arcMat)
    scene.add(arc)

    const pkgDotGeo = new THREE.SphereGeometry(0.012, 8, 8)
    const pkgDotMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 1 })
    const pkgDot = new THREE.Mesh(pkgDotGeo, pkgDotMat)
    pkgDot.position.copy(pkgPos)
    scene.add(pkgDot)

    objects.push({ mesh: arc, mat: arcMat })
    objects.push({ mesh: pkgDot, mat: pkgDotMat })
  }

  const startTime = performance.now()
  function fade() {
    const elapsed = performance.now() - startTime
    const t = Math.min(elapsed / durationMs, 1)
    objects.forEach(o => o.mat.opacity = (1 - t))
    if (t < 1) requestAnimationFrame(fade)
    else objects.forEach(o => scene.remove(o.mesh))
  }
  requestAnimationFrame(fade)
}

export function setActivePin() {}

export function getRandomCityIndex(cityList, excludeIndex = -1) {
  let index
  do {
    index = Math.floor(Math.random() * cityList.length)
  } while (index === excludeIndex)
  return index
}