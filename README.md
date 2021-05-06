API for DnD Bestiarium

### ENDPOINTS ###
[GET] '/api/creatures/'
Access all creatures in the bestiarium

[GET] '/api/creatures/id'
Access a specific creature at an id

[GET] '/api/creatures/:id/creatureTypes'
Access all creature types for a specific creature

[POST] '/api/creatures/'
Add a creature (name required)

[POST] '/api/creatures/:id/creatureTypes'
Add a creature type to a creature (name required)

[PUT] '/api/creatures/:id'
Edit a creature at an id

[DELETE] '/api/creatures/:id
Delete a creature from the bestiarium