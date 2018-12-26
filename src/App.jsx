import React   from 'react';
import Mozaik  from 'mozaik/browser';
import github  from 'mozaik-ext-github';
import travis  from 'mozaik-ext-travis';
import time    from 'mozaik-ext-time';
import iframe  from 'mozaik-ext-iframe';
import switcher from 'mozaik-ext-switch';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;


Mozaik.Registry.addExtensions({
    github,
    travis,
    time,
    iframe,
    switch: switcher,
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
