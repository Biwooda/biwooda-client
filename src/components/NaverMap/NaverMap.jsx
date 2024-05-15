import { React, useState } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
} from 'react-naver-maps';
import { center, level, markers as markerInfos } from '../../constants';

export default function NaverMapWithMarker() {
  const [markers, setMarkers] = useState(markerInfos);
  const handleMarkerClick = (index) => {
    const updatedMarkers = markerInfos.map((marker, i) => ({
      ...marker,
      size: i === index ? { width: 80, height: 95 } : marker.size,
      url: i === index ? '/select_marker.svg' : marker.url,
      amount: i === index ? '' : marker.amount,
    }));
    setMarkers(updatedMarkers);
  };

  return (
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}>
      <MapDiv style={{ width: '100%', height: '800px' }}>
        <NaverMap
          defaultCenter={{ lat: center.lat, lng: center.lng }}
          defaultZoom={level}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => handleMarkerClick(index)}
              icon={{
                content: `<div name='marker' style="display: flex; justify-content: center; align-items: center; width: ${marker.size.width}px; height: ${marker.size.height}px; background:  url(${marker.url}) no-repeat center/cover;"><span style="color: white; transform: translateY(-5px);">${marker.amount}</span></div>`,
                size: marker.size,
              }}
            />
          ))}
        </NaverMap>
      </MapDiv>
    </NavermapsProvider>
  );
}
