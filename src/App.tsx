import { createSignal, type Component } from "solid-js";
import MapGL, { Control, Viewport } from "solid-map-gl";
import * as maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const App: Component = () => {
    const [viewport, setViewport] = createSignal({
        center: [21.0104183293447, 52.22849610784601],
        zoom: 11,
    } as Viewport);
    return (
        <MapGL
            mapLib={maplibre}
            options={
                {
                    style: "https://demotiles.maplibre.org/style.json",
                } as Partial<maplibre.MapOptions>
            }
            viewport={viewport()}
            onViewportChange={(evt: Viewport) => setViewport(evt)}>
            <Control type="navigation" position="top-right" />
        </MapGL>
    );
};

export default App;
