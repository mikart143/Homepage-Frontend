import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from '@/components/utils/Button.vue';
import { Icon } from '@iconify/vue';

describe('Button text', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, { props: { text: 'Hello Vitest' } });
        expect(wrapper.text()).toContain('Hello Vitest');
    });
});
describe('Button loading', () => {
    it('does not contain text', () => {
        const wrapper = mount(Button, { props: { text: 'Hello Vitest', loading: true } });
        expect(wrapper.text()).not.toContain('Hello Vitest');
    });
    it('has loading icon', () => {
        const wrapper = mount(Button, { props: { text: 'Hello Vitest', loading: true } });
        expect(wrapper.findComponent(Icon).exists()).toBe(true);
    });
});
