export class ItemsService {
  locations = [
    {'location': 'Bedroom Wardrobe', 'items': ['scissors', 'sellotape', 'important item']},
    {'location': 'Bathroom Closet', 'items': ['shower gel', 'shampoo', 'tweezers']},
    {'location': 'Top Drawer', 'items': ['wallet', 'gym card', 'haribo']},
    {'location': 'Bookshelf', 'items': ['books', 'CDs', 'DVDs']}
  ]

  getAllLocations() {
    return this.locations.splice(0);
  }
}


