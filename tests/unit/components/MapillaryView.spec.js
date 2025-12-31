import { shallowMount } from '@vue/test-utils';
import MapillaryView from '@/components/MapillaryView.vue';

// Mock mapillary-js to avoid actual API calls during tests
jest.mock('mapillary-js', () => {
    return {
        Viewer: jest.fn().mockImplementation(() => {
            return {
                moveToKey: jest.fn(),
                on: jest.fn(),
                remove: jest.fn(),
            };
        }),
    };
});

describe('MapillaryView.vue', () => {
    let wrapper;
    const propsData = {
        lat: 51.505,
        lng: -0.09,
    };

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallowMount(MapillaryView, {
            propsData,
        });
    });

    it('renders the map container', () => {
        const container = wrapper.find('#mly');
        expect(container.exists()).toBe(true);
    });

    it('initializes Mapillary Viewer on mount', () => {
        const { Viewer } = require('mapillary-js');
        expect(Viewer).toHaveBeenCalled();
    });

    it('accepts lat and lng props', () => {
        expect(wrapper.props().lat).toBe(51.505);
        expect(wrapper.props().lng).toBe(-0.09);
    });

    it('emits moved event when Mapillary viewer moves', async () => {
        const { Viewer } = require('mapillary-js');
        // The component might have been re-rendered or multiple instances created
        // Let's get the latest viewer instance
        const viewerInstance = Viewer.mock.results[Viewer.mock.results.length - 1].value;
        const onImageCallback = viewerInstance.on.mock.calls.find(call => call[0] === 'image')[1];

        // Trigger the callback with a mock image object
        onImageCallback({
            image: {
                lngLat: { lat: 51.5, lng: -0.1 }
            }
        });

        expect(wrapper.emitted().moved).toBeTruthy();
        expect(wrapper.emitted().moved[0]).toEqual([{ lat: 51.5, lng: -0.1 }]);
    });
});
