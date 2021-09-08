import React from "react";
import { GoogleMap, LoadScript, Marker, Polygon} from '@react-google-maps/api';

export default function Map() {


    return(
        <LoadScript googleMapsApiKey="AIzaSyALYoh7_ArnvvBhdJi3aGxV97xzjfrGmI0">
            <GoogleMap 
                mapContainerStyle={{
                    position:"absolute",
                    width: "100%",
                    height: "89.5%"}}
                center={{lat:53.465302452036696, lng:9.97591791317134}}
                zoom={16}
            >
                <Marker 
                    position={{lat:53.465302452036696, lng:9.97591791317134}} />

                <Polygon 
                    path={[
                        {lat:53.465301841571055, lng:9.976259750707422},
                        {lat:53.464964026430735, lng:9.975951083445851}, 
                        {lat:53.464472222291626, lng:9.975173242716242},
                        {lat:53.465241861316514, lng:9.974607296516973},
                        {lat:53.466342005742675, lng:9.971715874755452},
                        {lat:53.4665863010074, lng:9.971399374015807},
                        {lat:53.46685614184161, lng:9.971512026803616},
                        {lat:53.46668689275377, lng:9.972051150957933},
                        {lat:53.46544784118457, lng:9.975900121380802},
                        {lat:53.46537439111671, lng:9.976020820796311},
                        {lat:53.465301841571055, lng:9.976259750707422}
                    ]}/>
            </GoogleMap>
        </LoadScript>

    )
}