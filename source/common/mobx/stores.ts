import ItemStore from '~/Events/Item/stores/Item.store';
import ListStore from '~/Events/List/stores/List.store';
import ProfileStore from '~/Profile/stores/Profile.store';
import InterestsStore from '~/Interests/stores/Interests.store'

export default {
    ItemStore: new ItemStore(),
    List: new ListStore(),
    Profile: new ProfileStore(),
    Interests: new InterestsStore()
}