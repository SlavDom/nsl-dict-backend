import {Word} from "../models/Word";
import {LexicalNest} from "../models/LexicalNest";
import {Prefix} from "../models/Prefix";
import {Suffix} from "../models/Suffix";
import {Tag} from "../models/Tag";
import {Part} from "../models/Part";
import {WordPrefix} from "../models/WordPrefix";
import {WordSuffix} from "../models/WordSuffix";
import {WordTag} from "../models/WordTag";
import {LexicalNestWord} from "../models/LexicalNestWord";
import authenticated from "../middlewares/authenticated";
import isAdmin from "../middlewares/isAdmin";

export interface IWordAdd {
  word: {
    value: string;
    english: string;
    esperanto: string;
    conjugation?: number;
    declension?: number;
    part: string;
  };
  lexicalNests: string[];
  prefixes: string[];
  suffixes: string[];
  tags: string[];
  ending: string;
}

export default function (router) {
  router.route('/words')
    .get(function (req, res) {
      Word.findAll().then(result => {
        res.status(200).send(result);
      });
    })
    .post(authenticated, isAdmin, async function (req, res) {
      const data: IWordAdd = req.body;
      const lexicalNests = [];
      const prefixes = [];
      const suffixes = [];
      const tags = [];
      data.lexicalNests.map(async nest => {
        lexicalNests.push(await LexicalNest.find({ where: { name: nest }}));
      });
      data.prefixes.forEach(async prefix => {
        prefixes.push(await Prefix.find({ where: { name: prefix }}));
      });
      data.suffixes.forEach(async suffix => {
        suffixes.push(await Suffix.find({ where: { name: suffix }}));
      });
      data.tags.forEach(async tag => {
        tags.push(await Tag.find({ where: { name: tag }}));
      });
      const part = await Part.find({ where: { name: data.word.part }});
      await Word.insertOrUpdate({
        value: data.word.value,
        en: data.word.english,
        eo: data.word.esperanto,
        conj: data.word.conjugation,
        decl: data.word.declension,
        ending: data.ending,
        partId: part.id,
      });
      const word = await Word.find({ where: { value: data.word.value }});
      if (word) {
        prefixes.forEach(async prefix =>
          await WordPrefix.insertOrUpdate({ wordId: word.id, prefixId: prefix.id }));
        suffixes.forEach(async suffix =>
          await WordSuffix.insertOrUpdate({ wordId: word.id, suffixId: suffix.id }));
        tags.forEach(async tag =>
          await WordTag.insertOrUpdate({ wordId: word.id, tagId: tag.id }));
        lexicalNests.forEach(async nest =>
          await LexicalNestWord.insertOrUpdate({ wordId: word.id, lexicalNestId: nest.id }));
        res.sendStatus(202);
      } else {
        res.sendStatus(400);
      }
    })
}