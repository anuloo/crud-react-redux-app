import request from '../../app/reducers/contacts';

describe('Contacts Reducer', () => {
    it('has default state', () => {
        expect(request(undefined, {type: 'unexpected'}))
        .toEqual({
            contactsList: {contacts: [], error:null, loading: false}
        });
    });

    it('can handle FETCH_CONTACTS', () => {
        expect(request(undefined, {
            type: 'FETCH_CONTACTS',
        }))
        .toEqual({ contactsList: {contacts: [], error:null, loading: true}});
    });

});