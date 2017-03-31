import request from '../../app/reducers/contacts';
const INITIAL_STATE = { contactsList: {contacts: [], error:null, loading: true},
							newContact:{contact:null, error: null, loading: false}, 
							selectedContact:{contact:null, error:null, loading: false}, 
							deletedContact: {contact:null, error:null, loading: false},
              updatedContact: {contact:null, error:null, loading: false}
						};
describe('Contacts Reducer', () => {
    it('has default state', () => {
        expect(request(undefined, {type: 'unexpected'}))
        .toEqual({
            INITIAL_STATE
        });
    });

    it('can handle FETCH_CONTACTS', () => {
        expect(request(undefined, {
            type: 'FETCH_CONTACTS',
        }))
        .toEqual(INITIAL_STATE);
    });

});