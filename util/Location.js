
const GOOGLE_API_KEY='d3f304f2c09248e98b53cceb054905e9'

export function getMapPreview(lat,lng){
   const imagePreviewUrl= `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=200&center=lonlat:${lng},${lat}&zoom=14&apiKey=${GOOGLE_API_KEY}`
    return imagePreviewUrl;
}






export  async function getAddress(lat,lng){
    const url= `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${GOOGLE_API_KEY}`
  
    const response = await fetch(url); 
    if(!response.ok){
        throw new Error('failed to fetch address!');
    }
    const data =await response.json();
    if(!data.features.length||!data.features[0].properties||!data.features[0].properties.formatted.trim().length){
        throw new Error("something went wrong")
    }
    const address=data.features[0].properties.formatted;
    return address;
   
 }
 
