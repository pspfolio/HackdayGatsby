---
path: '/react-hooks'
date: '2018-10-20'
title: 'Hooking with React Hooks ??'
reactVersion: '1.17 Alpha'
draft: false
tags: ['React', 'Hooks', '1.7']
thumbnail: "../../images/hook.png"
snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus urna, id rhoncus ipsum. Curabitur bibendum id orci ut finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pellentesque nec nibh in ultricies. Morbi fermentum nibh ac massa porttitor hendrerit. Maecenas mi ligula, ultricies vel tincidunt id, tempor vitae lorem. Nullam faucibus tincidunt ipsum, eget iaculis leo mattis vel. Vivamus porta ut sem vel vehicula. Cras id odio non sapien venenatis interdum sit amet dignissim nisi. Aliquam quis maximus libero, ac scelerisque nibh. In maximus iaculis sem, vel efficitur urna porttitor tempor. Phasellus ac tristique lectus. Vestibulum condimentum tempus dui, a mollis orci dignissim et. In vitae dui felis. Integer lacinia sodales sapien in aliquet. Suspendisse eleifend massa eget dolor eleifend ornare.

## Don’t refactor all to hooks just yet!

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus urna, id rhoncus ipsum. Curabitur bibendum id orci ut finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pellentesque nec nibh in ultricies. Morbi fermentum nibh ac massa porttitor hendrerit. Maecenas mi ligula, ultricies vel tincidunt id, tempor vitae lorem. Nullam faucibus tincidunt ipsum, eget iaculis leo mattis vel. Vivamus porta ut sem vel vehicula. Cras id odio non sapien venenatis interdum sit amet dignissim.

[[quote | “ Hooks might hook you with the left hook “]]

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus urna, id rhoncus ipsum. Curabitur bibendum id orci ut finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pellentesque nec nibh in ultricies. Morbi fermentum nibh ac massa porttitor hendrerit. Maecenas mi ligula, ultricies vel tincidunt id, tempor vitae lorem. Nullam faucibus tincidunt ipsum, eget iaculis leo mattis vel. Vivamus porta ut sem vel vehicula. Cras id odio non sapien venenatis interdum sit amet dignissim nisi. Aliquam quis maximus libero, ac scelerisque nibh. In maximus iaculis sem, vel efficitur urna porttitor tempor. Phasellus ac tristique lectus. Vestibulum condimentum tempus dui, a mollis orci dignissim et. In vitae dui felis. Integer lacinia sodales sapien in aliquet. Suspendisse eleifend massa eget dolor eleifend ornare.

![Hook](../../images/hook.png)

## Hook all the things

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus urna, id rhoncus ipsum. Curabitur bibendum id orci ut finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pellentesque nec nibh in ultricies. Morbi fermentum nibh ac massa porttitor hendrerit. Maecenas mi ligula, ultricies vel tincidunt id, tempor vitae lorem. Nullam faucibus tincidunt ipsum, eget iaculis leo mattis vel. Vivamus porta ut sem vel vehicula. Cras id odio non sapien venenatis interdum sit amet dignissim nisi. Aliquam quis maximus libero, ac scelerisque nibh. In maximus iaculis sem, vel efficitur urna porttitor tempor. Phasellus ac tristique lectus. Vestibulum condimentum tempus dui, a mollis orci dignissim et. In vitae dui felis. Integer lacinia sodales sapien in aliquet. Suspendisse eleifend massa eget dolor eleifend ornare.

```javascript
import { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus urna, id rhoncus ipsum. Curabitur bibendum id orci ut finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pellentesque nec nibh in ultricies. Morbi fermentum nibh ac massa porttitor hendrerit. Maecenas mi ligula, ultricies vel tincidunt id, tempor vitae lorem. Nullam faucibus tincidunt ipsum, eget iaculis leo mattis vel. Vivamus porta ut sem vel vehicula. Cras id odio non sapien venenatis interdum sit amet dignissim nisi. Aliquam quis maximus libero, ac scelerisque nibh. In maximus iaculis sem, vel efficitur urna porttitor tempor. Phasellus ac tristique lectus. Vestibulum condimentum tempus dui, a mollis orci dignissim et. In vitae dui felis. Integer lacinia sodales sapien in aliquet. Suspendisse eleifend massa eget dolor eleifend ornare.