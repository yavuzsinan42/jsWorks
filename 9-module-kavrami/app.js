// commonjs senkron ==> browserify | amd asenkron module definition ==> require.js
/*
import {sayilariTopla, sayilariBol} from './utils.js';

sayilariTopla(5,1);
sayilariBol(42,7);
*/

/*
import * as utilsFonksiyonlari from './utils.js';
utilsFonksiyonlari.sayilariTopla(3,2);

*/
/*
import { sayilariCarp } from "./utils.js";

sayilariCarp(4,3);
*/

/*
import { sayilariCarp as carp } from "./utils.js";

carp(4,3);

import varsayilan from "./utils.js";
varsayilan(10,2);
*/
/*
import cikar,{sayilariCarp} from './utils.js';
cikar(4,3);
sayilariCarp(2,4);
*/
import Nesne from './utils.js';

const ogr = new Nesne('yavuz',5);
