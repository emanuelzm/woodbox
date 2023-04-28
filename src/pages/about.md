---
layout: ../layouts/BaseLayout.astro
title: About me
---
import Button from '../components/Button.astro';
import ReactCounter from '../components/ReactCounter.jsx';

I live on **Mars** but feel free to <Button title="Contact me" />.

Here is my counter component, working in MDX:

<ReactCounter client:load />