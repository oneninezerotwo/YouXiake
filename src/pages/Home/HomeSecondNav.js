import React, { Component } from 'react';

class HomeSecondNav extends Component {
    constructor() {
        super();

    }
    state = {
        navs: [{
                title: "邮轮",
                imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEWElEQVRoge3ZX6hUVRTH8Y/X2xXNQiv6I1IRGaVF0jUCC0oJo4yioqKI0ELJIgoSDJSCiqgoKazQoPKlKDAfol6E0iQMJOivClmmJoomWKk38+rcHvZcmzmzz/HMnJl71eYL+2XOPr+11p699t5rH9q0adPmBOZGbEdfHW17+b3jinqDrAz2uKKRIPvbccUJE2gjOVi0DUoOD3SQg5bDgxHkoEzt/22gJ4qtQTXeDnQgaAeawWV4ClvwJq5BR4tsNY08xjswGS/h58g7fdiJt4SDwLACtlpGmvEu3IDF2BHpl9X+xAe4G6fksDUgJI3fifewJ/KskXYAn2JW5NmA0ojz+7EMc/AOfm9Qp+Wci8ewsg6ndmMpbsXwhN5QXIdXhQUqr+a3eBqXNzO48ViAr+twZCsWYSo667DVjWfxYx22fsErwgpeiLwjvR7P40oMKWoU4zAPX+FwDvuHixpMC7SEtXgSFxc1chTGCHm9AgdT/PmjqJHkNFqNRzC2qHCDjMJ9+Djh17aiwl8mBKcWFWwSE1T79VNRwY8SgvcWFWwS16v2a1VRwUUJwblFBZvE/ar9er+o4NyE4OKigk3iOdV+vVBUcLraxehYYJlqv2YWFbwgIbirqGCTSO4GVxUV7EBPQvTCAnqnC/k0uYDGaByq8KeEUwvoHWGV6kAXNqgzEZvKGv/g4QZ1kvn5XYM6NTyUEO5V/346Q6hekieapRhRh85UYZBashMMFw7qySPX1TneHYF31QZY2X7AJTm0ppTtVr67Q3WRXphpqvOiD39jdsY7k7BBdpD9rQePi98hDcV8tefcEm4pFlacOSlOfiLUqv0MFyqZ3kjfvUJN+02K1mpcWqE1HmtS+s5rfoj/8YR42dQjLBIzsDnFsXVlxwmD8XZKv14swRvig3UIj7YwxiPcrjZXsloJr6m9YYDbhL05r9Yu3NSasOKch89yOLZZyO8szsLyHFrLcXZzw8jHEKE2jH0r3SssILF/MY2bhemd1NpYftYSNgjTZL1wjfkAzkzpO1LIz7+Ei+oXcU5K3y6cL+RqbBA6cJdQHq4VivyuDD9HC6v1CuEirlT2PTcr1Y7sAbyOM+oRKtOND7GvQu+gcFPQ3YDeMGHG7I34uaoeoYURgf62U7iNz8MkfC77guuwsB3lvTEcJ3176hNq6NwkC9vYEv/gUTRmSr/MirU1wiKXxXTh00XWCp91iInShYuEPSt2winhGbU5dJKQs6UUZ9YJuR97tgd3pPgzQ3xf3VL2cUy9AcboFA7PsX9oqzD1ZpcDzPpydm2F5hT8GulXEg4TE4TFaSxeFh+4JTi5GQEmmaZ6QcnT9gsfoUZF9EYJi1RWisR+73X01ClMN37LcK6ybcIVOTRnCUVCHs19WrivJunfO9OOgvuF/fS0OjQn4vsUvf62sdxvwBkhfK2eL9zELRBKp5EN6nXiHuHya5swRXfjC+HwUM9Jq02bNm2OPf4F2xBsH6sA0roAAAAASUVORK5CYII=',
                to:'#'
            },
            {
                title: "签证",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAADp0lEQVRoge2aTUgVURTHfxhET9Skdhq0i9AW5SZcSa5sEYSLhKBwowuxTQatXdYixQ8IclPiKuvVykhs40ooP0LyZQlvZyGhUoYv3tMWc4funDfvY96dN2+q+cNlmPO/9z/nMHPvPffegQgRIkSIEG40AQ+ANWAfOAyw7AMf1PObyhXgUWAMyAQcXK6SAR4CMb+DnA1BcG5lTvnnC8ZDEFC+MuZHkM1AWgivA51AnR8P8IA69dx14U9a+WmEISH6Eag3FTVEPZDA6deQqeiaEOw0FfQJnTj9WjMVTAnBoD/XXKjF6VfKVFB2fK9oAG4BT7E+tx2lswN8AqYV31AB33wROw/EyR7I8s2LcdWu3L75InYMGKH0xCIDjCodv33zTawRWHJpU0pZUnp++VYQxYqdApIu9Q+B98Av7V5/2ynFu7VLKl1T34pCMWIxYNml7gbWNDAo7G/E/aCqt+GisUzufDbwQEdd6r3CmthjwJZmTwFncU5bW6pevWontUYNfCsahcRayB54XgJHFH9DcE+U/bGw31T2I6q9HKBaSvDNEwqJxQW/DtRo/GvBtyt7u7DPam1qsFJNnY+X4Jsn5BNrJPttXtb4Ezjn0a9AleKq1L3NpYGTWtsOoZshexQOLNB+wS0KvkvwU4KfEnyX4BcF3+/BN8/IJzYtuAHBjwi+T/B9gh8R/IDgn3nwzTPyicmlUhJ4AdzDyl9XBX9JaxvD+sx1/jNwX2kkgJ+CT3jwzTPyie268OUsu5UKNMggi3l+2QIt9xuVn27F3qjso9eAq8BdrGxG7vvq2dAe8M0lsDvAFeAMcFHwFeujhUbdBcG3Cr5V8AuCvy34io26ch59J/gJwfcKvlfwE4J/K/iKzaNumVGHxncLblK0nxR8t8a5ZUZyyRZYoJA/120ADjRuE2cKuKlxB/zZNwpdrguFVy/zgmtT9jZhn1f20K5ewH09OgMcB3qE3e6Hj4S9R9WfcdEKxXoUoJrcOwzXgW3NtgecVlfbtq3q5dphqDbwrWgUK5Zvz+iLuJ8rwNslScj2jGw0AisubUopK4R0F9BGDKtPme7r5vpcTXwri9gFStupdxtd/fatLGL22cs01txoLwR2sc5enhOSs5ewnqbV4PTru6ng33I+umoqKE+8E4TzxHvYVPQcuf9hqDUV94ha9VyZB6eVn8YI+18p434ECf/Rf0Z2sP/8n2M6mrE6fgLnmWcQ5QfW6DqMT30yQoQIESJEMMBvxhNihz9wf6QAAAAASUVORK5CYII=',
                to:'#'
            
            },
            {
                title: "自由行",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAABxElEQVRoge2ZTWoCQRCFv5UQiOIlJKC5iFl6q2yigkIu4QlCbhHiz1rMyogkCw1KsrAFbRkYe6p/jPVBwSy6Xr0H08PQDYqiXBM1YAAsgV/HWhqNWmDvubkDFrgHtGthNJNjgFzIfQ2CJshJkdc1q76CJsiJbTK2jjc0aCQdb2jQSDre0KCRdApTB56AIbDi1JivWgHvZnbdZ8AS0AO2AcNl1RZ4Bm58hHxJIKBdr8abGP0EQmVVTypkA9hY4hOgBVSkhuSgYmZOLC8b47EwbUt4DFQlhB2pAiPLU1tCeGiJtiREC9Li2NNQQnRtiYZ8XbMoc+xpLSFqb/48NIGZqaaH9a6+xAVnB+tnHta7+hIXPLcnxIwkTGhQ4Z7oJjSocE90ExpUuCe6CQ0q3BPdhAYV7olu4mKDHv6kf3hY7+pLXPCBneGpeZZe7+orrKAQGtSVFI9Sbjn2JHIzfgmHY28SovZx54j0jjs7EsL3ZB9glyUG5KRsZo4tLxvjUYSUryT6UiHhii6Z9mH//bXhIQ12m38E/AQM983u69pBcE+6MOfU3DxgfzCuJmiHU6OPAfuDUQK6wKepLud9EYv2K4qipM8fen8cqFsFJOsAAAAASUVORK5CYII=',
                to:'#'
            },
            {
                title: "房车游",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAACYklEQVRoge2Zv2sUURSFv4hkMYgIaVxiKi2sLUIKKxEhf4AiqAjWEsVGi4CFYGEvlqIIghYWIrHQTlgxhYmIqVKpqUQDMZCoRIsdw86dH+y9b3d8F96BC2Fnz7nnYyfLzCwkJSUlJSU1qnPAR+AX8Cfy+Q7cB8a1kKcjKG+ZB1rQNxGUtswnLehWBKUt81YLKgNi1VPyPW9rAzyAHqb4RTmtDYkddAR4Qb7jkiUodtCrFDuesQTFDHoF2Cbf7xXdT1mt//3tqZk14JAF0hPoFnDcCukFdA04EQLpAXQbOBoKWQYag96T73R+EKExgt4k3+nxIEJjBJ2i+D/aCg2NEXQE+EK+18nQ0BhBAe6S73UnNDBW0BnyvT5jvCL6p1hBW8A6+W5TIYGhoDPAaklO1axmnn70RHhvGfrtKBRUA9kL24/OCt+yod+OQkGtVzz9aB+wKXxHDB1Li4b6BwkK8Ez45gwdS4sOy2/dc0H4TE8XQgpo/dY9+yk+qTSdvrGDAswL7w19TR+gF4X3g76mD9Bx4Kfwqx+peAAFeCn817UBXkAvCf9rbYAX0Anh/w3s1gRsiIA9ygJNgUL3DqY3Y1JjXhHmU8Auhb8p0L10fwQ2gz4sKeFhvqL7QJim+Njfw5hu2a45g+0AYxZQgGPAI+BbBCB1cy8EslcdETwPtLOR15wdB3sqJe8U2j3H2uLYpoM9pgIHxLF1B3sqJU+p59nig9nfwzp1h7WnUrNiSd3MOthTqRaw2MfyJcJ+D2lqT60mgHc1yxez93jZU6tR4DKwAPzIZiF7bdThnqSkpKRm9Rc0oPRSA5c1rQAAAABJRU5ErkJggg==',
                to:'#'
            },
            {
                title: "分享会",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEN0lEQVRoge2aS2hVRxjHf1cvaq3B+E5VKijiK2JEqChiF+IDtAtR0E1RRHSnWQha7aJQJKJShUhbRJBSRMSFxOfCtKBEF258UbVQX1GMBh+RpKK1Ji5mrp58M/fkzMwJ3sD5w2xm5vvd/3fOmTOPcyFTpkyZMmXK9Kk0C6gBzgNNwGtdmnRdje7TY7UIuAZ0JCzXdEyP0SjgNMkTlOWMZpS0vgKa8U+yUJo1qyQ1E2jFNP0WqANWAWOBvkAZMEnX1ek+Mq5VM0tKI4DHmGbrgckJ4icDZy3xj4GKbvDrreOYJn8CejsweusYyTmRqtMALcI0tzeAt9fCK4m3cQOdTTUA+QBevgjzk2oSnQ21A9NS4E7TrCg7yVjvNm0RZupTZNcL9pYU2c46KcysT5G9TrBPpsh21h1hpjJFdqVg3xHtFUA1ahXWCLwB2oBbuq6aFKemNmGmLC0wMECw23T9IGAfamPQ1Qrrte47KNTMOwHuFQqMKCfY74AZwH26TlCW+zrWW88FcGgITGiIYL8EWnBPslBagKm+ZuQ2bLYvyKLZgv0fpvlGYDMwBeijyxRd12jp/wAY7mPmkABt88vJqq3E36Fa1AahmPrqPjJuv4+ZtQJyAzW2QpXTrGJJ7nBg7RCx/wMTXA2NQL3Wo6BlrhCLllE8yeu4LTHzOibK2O5j6jcBeUjY63wwaiwVS3SNB/NbwbjoY2w85oviD6CfB6ufjo0bm6M9uCMF46kHA4AfLYbOoaaIpBqKOhXsaprw3RlJjpfyqMQk7C4wPUH8dOCeJf4C5lz9pYe/CsF47sH4oIHAFYvZV8DSmLjFuo+MuwoMAy6J+uUe3pYLxiUPRieVYybbDsyNianEPBy7olkAu0RbA25TWA5zI7/LId6qctRAj0J/TxD3M+ajNVi3VWHe7Y0OnjZa4qsc4q3aLYAvSbZVGgK8ELE1kfY6zKdkE/F3Nqf7yJOKusTZFNEXmFun7xzi5ZKvlY+P7xjMC9EBnEItWqQqUCf+sn+LZgVpp4A+AD5ziP8c82x4a6R9PuYqrAN4AiyJ9PsG+9eCN5oRpHLMU3qfY5VNgvEItSMpaB7mO6ADuA30Ry3kb1ran+nYYFVbDLrczYJsF2xlpH0A6qgk2v4vnefqSl0X7fMX6kIEKWf58e8DeHsE61yk7SDm3VptYayy9NsX4AlQc6QcC8MCeBOxn+kuxDT/awxHXpR2YE6AL/YL4OEQmNafglkL/CPqrhM/PMpQS9BozFXcvgd9UB7ztZ/Gd5IVginH3FuSHXZ9jfl0rPYxNFNAmgn77lJQH+yfIQvlgAPriIj9G4/TSnmaftQVEKNfsCf5CrdP/+Mw598Frma6OsAq1VLrmuiGEjDtU465JlqFOdh7QvnBNVFQ26CmbjL0AvW3gcuoY8pQXjPqsfVZtWXKlClTpkyZYvQeV40cO4l+npcAAAAASUVORK5CYII=',
                to:'#'
            },
            {
                title: "游侠风旅拍",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEN0lEQVRoge2aS2hVRxjHf1cvaq3B+E5VKijiK2JEqChiF+IDtAtR0E1RRHSnWQha7aJQJKJShUhbRJBSRMSFxOfCtKBEF258UbVQX1GMBh+RpKK1Ji5mrp58M/fkzMwJ3sD5w2xm5vvd/3fOmTOPcyFTpkyZMmXK9Kk0C6gBzgNNwGtdmnRdje7TY7UIuAZ0JCzXdEyP0SjgNMkTlOWMZpS0vgKa8U+yUJo1qyQ1E2jFNP0WqANWAWOBvkAZMEnX1ek+Mq5VM0tKI4DHmGbrgckJ4icDZy3xj4GKbvDrreOYJn8CejsweusYyTmRqtMALcI0tzeAt9fCK4m3cQOdTTUA+QBevgjzk2oSnQ21A9NS4E7TrCg7yVjvNm0RZupTZNcL9pYU2c46KcysT5G9TrBPpsh21h1hpjJFdqVg3xHtFUA1ahXWCLwB2oBbuq6aFKemNmGmLC0wMECw23T9IGAfamPQ1Qrrte47KNTMOwHuFQqMKCfY74AZwH26TlCW+zrWW88FcGgITGiIYL8EWnBPslBagKm+ZuQ2bLYvyKLZgv0fpvlGYDMwBeijyxRd12jp/wAY7mPmkABt88vJqq3E36Fa1AahmPrqPjJuv4+ZtQJyAzW2QpXTrGJJ7nBg7RCx/wMTXA2NQL3Wo6BlrhCLllE8yeu4LTHzOibK2O5j6jcBeUjY63wwaiwVS3SNB/NbwbjoY2w85oviD6CfB6ufjo0bm6M9uCMF46kHA4AfLYbOoaaIpBqKOhXsaprw3RlJjpfyqMQk7C4wPUH8dOCeJf4C5lz9pYe/CsF47sH4oIHAFYvZV8DSmLjFuo+MuwoMAy6J+uUe3pYLxiUPRieVYybbDsyNianEPBy7olkAu0RbA25TWA5zI7/LId6qctRAj0J/TxD3M+ajNVi3VWHe7Y0OnjZa4qsc4q3aLYAvSbZVGgK8ELE1kfY6zKdkE/F3Nqf7yJOKusTZFNEXmFun7xzi5ZKvlY+P7xjMC9EBnEItWqQqUCf+sn+LZgVpp4A+AD5ziP8c82x4a6R9PuYqrAN4AiyJ9PsG+9eCN5oRpHLMU3qfY5VNgvEItSMpaB7mO6ADuA30Ry3kb1ran+nYYFVbDLrczYJsF2xlpH0A6qgk2v4vnefqSl0X7fMX6kIEKWf58e8DeHsE61yk7SDm3VptYayy9NsX4AlQc6QcC8MCeBOxn+kuxDT/awxHXpR2YE6AL/YL4OEQmNafglkL/CPqrhM/PMpQS9BozFXcvgd9UB7ztZ/Gd5IVginH3FuSHXZ9jfl0rPYxNFNAmgn77lJQH+yfIQvlgAPriIj9G4/TSnmaftQVEKNfsCf5CrdP/+Mw598Frma6OsAq1VLrmuiGEjDtU465JlqFOdh7QvnBNVFQ26CmbjL0AvW3gcuoY8pQXjPqsfVZtWXKlClTpkyZYvQeV40cO4l+npcAAAAASUVORK5CYII=',
                to:'#'
            },
            {
                title: "游侠集市",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAABJElEQVRoge2ZQQ6CMBBF/xW8gspZ3LjxmoqnUjDRhAQuoAvKhkhoh87Qhv+Svys/8xIIhAEIIYTkywlABeAbIbXrS5IH4kgOedqO709MySFJslnRvSBZiq7VoQ5FjTvUyfYZLQCUANo/A6SS1s14lEoeADQJiPimcTMHUyYwfGiuEtGUb9eptBLRccnOI6HnY2Q852LR0GusoKhmAUUVoahmAUUVoWisgjP6n1dzXyuVO6uFumjIb823ZIBIcy4u8JXUvpUpGqvg9efMVD6SASLNubjggn5tMCdZu7NarPJ6WQOKmhUYQVGzAiMoalZgBEXNCoygqFmBERSVFlitGMxXEptZMuW4NrxJRDezCAb61f4dQJeAyFQ6N2MhlSSEEEKE/ADf+yDOuunEBgAAAABJRU5ErkJggg==',
                to:'#'
            },
            {
                title: "别young之旅",
                imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAB0klEQVRoge2avUoDQRRGT0yrvYVEY6/iA4gWFrFOK7ZpRcU+jxIQ3yBptNFSfQGJPwjBgBIIMYWQYi02YnayTeK9znUzBy6k+uY7MPs3BAKBQCBJCXgbzp7nLqq0gGg4Lc9dVImcySxBNGv8G9Ed4JHxwj6mB6xqiTYNCI7ONZDXEPUtljansyL6Caxri/pgEeg4PW4R3sIWRAH2U7ocSS5gRRSg7nTpA8tS4ZZEl4AuyT7nUuGWRAFqJPu0pYItiW4CA5J9qlLhVkTzwJ3TpQXMSy1gRfQ4pUtZcgELokXiO+xoj7r0Ir7fgtKmh+BjxbJoRVoS7H29XAA5DdFt4MGA4PeWLWhISuCWzSxBNGuYF10hvvh934Ai4BnY0pCcA64MCI7OvYboiQGxtBFljfjwybeUqmgeuHHCO8SHUz5QEz1MCT+QXGBCVEQLwIcT3JAKnxIV0TMntEt8GOUTFdG2E1qTCv4FKqJVJ3QAbEiFT4mK6ALJ/xtEKBz7T4jaXbecEi567D8hqi8MDSe8T/ze6wNV0SLjjxkrI07FgNSfiOaASwNio9PUEIX43NTS9+iulqgU6tvPCkE0a8yM6As/kk+eu6hSAl6B9+HvQCAQ4Aui8SQVmOx3EQAAAABJRU5ErkJggg==',
                to:'#'
            }

        ]
    }

    render() {
        return (
            <div className="mIndexSecondNav">
                <div className="mScrollX">
                    <div className="mIndexSecondNav__container" >
                        {
                            this.state.navs.map(item=>
                            <a href={item.to} className="container__box">
                                <img src={item.imgurl} />
                                <span>{item.title}</span>
                            </a>
                            )
                        }
                        
                    </div>
                </div>
            </div>


        )
    }
}


export default HomeSecondNav;
