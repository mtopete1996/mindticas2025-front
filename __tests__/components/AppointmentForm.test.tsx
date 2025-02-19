import HomePage from '@/pages/index';
import { render } from '../../utils/render-test';
import AppointmentForm from '@/components/AppointmentForm';

describe('HomePage Snapshot', () => {
    it('should match the snapshot', () => {
        const { asFragment } = render(<AppointmentForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});
