"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./app/utility/constants");
const pokemon_service_1 = __importDefault(require("./app/pokemon/pokemon.service"));
const constants_2 = require("./app/utility/constants");
const auth_service_1 = __importDefault(require("./app/auth/auth.service"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_1 = require("./app/app");
(0, app_1.startServer)();
constants_1.pokemonData.forEach(pokemon => pokemon_service_1.default.create(pokemon));
constants_2.adminData.forEach((admin) => __awaiter(void 0, void 0, void 0, function* () { return yield auth_service_1.default.create(admin); }));
