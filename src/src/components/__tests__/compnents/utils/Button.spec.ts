import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from '@/components/utils/Button.vue';

describe('Button', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, { props: { text: 'Hello Vitest' } });
        expect(wrapper.text()).toContain('Hello Vitest');
    });
});
