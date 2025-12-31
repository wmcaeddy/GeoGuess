import { shallowMount, createLocalVue } from '@vue/test-utils';
import StreetView from '@/pages/StreetView.vue';
import MapillaryView from '@/components/MapillaryView.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

// Mock google maps
global.google = {
    maps: {
        StreetViewPanorama: jest.fn(),
        LatLng: jest.fn().mockImplementation((lat, lng) => ({ lat: () => lat, lng: () => lng })),
        StreetViewService: jest.fn(),
        StreetViewSource: {
            DEFAULT: 'default',
            OUTDOOR: 'outdoor',
            GOOGLE: 'google'
        }
    }
};

// Mock child components to avoid rendering them fully
jest.mock('@/components/HeaderGame.vue', () => ({ 
    name: 'HeaderGame', 
    render: h => h('div'),
    methods: {
        startTimer: jest.fn(),
        stopTimer: jest.fn()
    }
}));
jest.mock('@/components/Maps.vue', () => ({ name: 'Maps', render: h => h('div') }));
jest.mock('@/components/DialogMessage.vue', () => ({ name: 'DialogMessage', render: h => h('div') }));
jest.mock('@/components/game/Leaderboard.vue', () => ({ name: 'Leaderboard', render: h => h('div') }));

// Mock MapillaryView to avoid actual Mapillary JS initialization issues in tests
jest.mock('@/components/MapillaryView.vue', () => ({
  name: 'MapillaryView',
  props: ['lat', 'lng'],
  render: h => h('div', { class: 'mock-mapillary-view' })
}));

describe('StreetView.vue Integration', () => {
    let store;
    let getters;
    let state;

    beforeEach(() => {
        getters = {
            areasJson: () => []
        };
        state = {
            players: []
        };
        store = new Vuex.Store({
            getters,
            modules: {
                settingsStore: {
                    namespaced: true,
                    state
                }
            }
        });
    });

    it('renders MapillaryView component', async () => {
        const wrapper = shallowMount(StreetView, {
            localVue,
            store,
            stubs: {
                HeaderGame: {
                    render: h => h('div'),
                    methods: {
                        startTimer: jest.fn(),
                        stopTimer: jest.fn()
                    }
                },
                Maps: true,
                DialogMessage: true,
                Leaderboard: true,
                'v-overlay': true,
                'v-progress-circular': true,
                'v-tooltip': true,
                'v-icon': true,
                'v-btn': true,
                'v-alert': true,
                'v-progress-linear': true
            },
            mocks: {
                $t: (msg) => msg,
                $tc: (msg) => msg,
                $vuetify: { breakpoint: { mobile: false } },
                $gmapApiPromiseLazy: jest.fn().mockResolvedValue({})
            }
        });

        // Set randomLatLng to trigger v-if="randomLatLng"
        wrapper.setData({
            randomLatLng: { lat: () => 51.505, lng: () => -0.09 }
        });

        await wrapper.vm.$nextTick(); // Wait for DOM update
        console.log(wrapper.html());

        // Since we haven't updated StreetView.vue yet, this test is expected to fail finding MapillaryView
        expect(wrapper.findComponent(MapillaryView).exists()).toBe(true);
    });
});
