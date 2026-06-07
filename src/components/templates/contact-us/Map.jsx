// 'use client'
// // MapComponent.jsx
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// // import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'
// import { useEffect } from 'react'

// // رفع مشکل نمایش مارکر پیش‌فرض
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// })

// export default function MapComponent() {
//   const valiAsrCoords = [35.7072, 51.4103] // مختصات چهارراه ولیعصر

//   return (
//     <div style={{ height: '500px' }}>
//       <MapContainer center={valiAsrCoords} zoom={16} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={valiAsrCoords}>
//           <Popup>
//             چهارراه ولیعصر، تهران
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   )
// }
'use client';

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import '@/styles/leaflet-fix.css'

// رفع مشکل مارکرها
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function Map() {
  const valiAsrCoords = [35.7072, 51.4103]

  return (
    // 💡 نکته کلیدی: ارتفاع 100٪ تا والد را پر کند
    <div className="w-full h-full">
      <MapContainer
        center={valiAsrCoords}
        zoom={16}
        scrollWheelZoom
        className="rounded-[20px] w-full h-full" // 👈 ارتفاع و عرض کامل، و همون گردی گوشه‌ها
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={valiAsrCoords}>
          <Popup>چهارراه ولیعصر، تهران</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
