import sequelize from './index';
import {Word} from "../models/Word";
import {WordTag} from "../models/WordTag";
import {WordPrefix} from "../models/WordPrefix";
import {WordSuffix} from "../models/WordSuffix";
import {Suffix} from "../models/Suffix";
import {Prefix} from "../models/Prefix";
import {Tag} from "../models/Tag";
import {Synonym} from "../models/Synonym";
import {Antonym} from "../models/Antonym";
import {Meaning} from "../models/Meaning";
import {Part} from "../models/Part";
import {LexicalNest} from "../models/LexicalNest";
import {LexicalNestWord} from "../models/LexicalNestWord";
import {Example} from "../models/Example";

export default function () {
  sequelize.addModels([
    Word,
    WordTag,
    WordPrefix,
    WordSuffix,
    Suffix,
    Prefix,
    Tag,
    Synonym,
    Antonym,
    Meaning,
    Part,
    LexicalNest,
    LexicalNestWord,
    Example
  ]);

  sequelize.sync();

  sequelize.authenticate();
}
