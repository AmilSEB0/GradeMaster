'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' :
                                            'id="xs-controllers-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' :
                                        'id="xs-injectables-links-module-AppModule-bb11bcc139378a8880a34d64bfb2c29c78a6f66a8fab3d50b4b38623277409783cca4e02d50ab8ac6514a1889f4c3d9e4231ec64e3e7981c611186b6c8f7b25d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' :
                                            'id="xs-controllers-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' :
                                        'id="xs-injectables-links-module-AuthModule-561b95f52d9a0ede8ea879e8cfb858b55dad4e748e21b2f62a0202cc13ca2d21cde2d1a16bab8fa2faff7be8c560b7c5ed067ef973aa694ebdd28792785e62c0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtAuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAuthGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClasseModule.html" data-type="entity-link" >ClasseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' : 'data-bs-target="#xs-controllers-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' :
                                            'id="xs-controllers-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' }>
                                            <li class="link">
                                                <a href="controllers/ClasseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClasseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' : 'data-bs-target="#xs-injectables-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' :
                                        'id="xs-injectables-links-module-ClasseModule-adf56ab5d9664265e7bb31050a7010fd8fad8df5d898f11859043b30d395f2b04b2597d38e7e1cec61927df6c7c95563dfe1e9ac1094680c544826e5080fed8a"' }>
                                        <li class="link">
                                            <a href="injectables/ClasseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClasseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EleveModule.html" data-type="entity-link" >EleveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' : 'data-bs-target="#xs-controllers-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' :
                                            'id="xs-controllers-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' }>
                                            <li class="link">
                                                <a href="controllers/EleveController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EleveController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' : 'data-bs-target="#xs-injectables-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' :
                                        'id="xs-injectables-links-module-EleveModule-b9cb71ff9fe5aec702c4ae0c63f36df36c3f2a62e3ca96d88a65d1a2751c68569906d0e4497d5f297160ff2e17fb45a8dbd29b9b01d7e820fdb95c401cd18bdb"' }>
                                        <li class="link">
                                            <a href="injectables/EleveService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EleveService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MatiereModule.html" data-type="entity-link" >MatiereModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' : 'data-bs-target="#xs-controllers-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' :
                                            'id="xs-controllers-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' }>
                                            <li class="link">
                                                <a href="controllers/MatiereController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatiereController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' : 'data-bs-target="#xs-injectables-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' :
                                        'id="xs-injectables-links-module-MatiereModule-bb9b409b9ac88b39a8700d032bcc13adb151c15ae1ff4d04a90227c12b98a7374cc7456c5992567289dc4828f2bfd6d4a5271ee5543ad503a9bcf243ced94c7e"' }>
                                        <li class="link">
                                            <a href="injectables/MatiereService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatiereService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NoteModule.html" data-type="entity-link" >NoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' : 'data-bs-target="#xs-controllers-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' :
                                            'id="xs-controllers-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' }>
                                            <li class="link">
                                                <a href="controllers/NoteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' : 'data-bs-target="#xs-injectables-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' :
                                        'id="xs-injectables-links-module-NoteModule-ea232e8ac1799c9585a01cc279c2aa3fae3b91cacdbd8f200bc14a9de9d3d373aa108e18ddbcd0e9b15e26fd23e663ccd5fd5861b7bc9bf5358f2e3aab620a22"' }>
                                        <li class="link">
                                            <a href="injectables/EleveService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EleveService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MatiereService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatiereService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfesseurService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfesseurService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParentModule.html" data-type="entity-link" >ParentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' : 'data-bs-target="#xs-controllers-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' :
                                            'id="xs-controllers-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' }>
                                            <li class="link">
                                                <a href="controllers/ParentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' : 'data-bs-target="#xs-injectables-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' :
                                        'id="xs-injectables-links-module-ParentModule-92423b2449cce5a1d4950533efa43b7f844771dc68837f747390854c1f149d6bbfc560a8c76bda5053be11b776ac7a30c81a4060c3ff28d0852295ba5250cd3a"' }>
                                        <li class="link">
                                            <a href="injectables/ParentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfesseurModule.html" data-type="entity-link" >ProfesseurModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' : 'data-bs-target="#xs-controllers-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' :
                                            'id="xs-controllers-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' }>
                                            <li class="link">
                                                <a href="controllers/ProfesseurController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfesseurController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' : 'data-bs-target="#xs-injectables-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' :
                                        'id="xs-injectables-links-module-ProfesseurModule-03ee2088b081ffc2d1f41a5ba001746a86cc8bf4dca1f84e0ab52c6727012dacabe12b2665cc4f2e87fd6e7e902eeedd127996de5140f5ad9891c39065eec7e9"' }>
                                        <li class="link">
                                            <a href="injectables/ProfesseurService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfesseurService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilisateurModule.html" data-type="entity-link" >UtilisateurModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' : 'data-bs-target="#xs-controllers-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' :
                                            'id="xs-controllers-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' }>
                                            <li class="link">
                                                <a href="controllers/UtilisateurController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilisateurController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' : 'data-bs-target="#xs-injectables-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' :
                                        'id="xs-injectables-links-module-UtilisateurModule-78e9df2e362b757d2e6301c1206cb0e110e3e9f45e210710bc273dbaa1b78974b2983896909f98a81b22c30cd093be39db39a377a890ba2e04375804d35f9a2c"' }>
                                        <li class="link">
                                            <a href="injectables/UtilisateurService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilisateurService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Classe.html" data-type="entity-link" >Classe</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Eleve.html" data-type="entity-link" >Eleve</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Matiere.html" data-type="entity-link" >Matiere</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Note.html" data-type="entity-link" >Note</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Parent.html" data-type="entity-link" >Parent</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Professeur.html" data-type="entity-link" >Professeur</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Utilisateur.html" data-type="entity-link" >Utilisateur</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateClasseDto.html" data-type="entity-link" >CreateClasseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEleveDto.html" data-type="entity-link" >CreateEleveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMatiereDto.html" data-type="entity-link" >CreateMatiereDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNoteDto.html" data-type="entity-link" >CreateNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateParentDto.html" data-type="entity-link" >CreateParentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfesseurDto.html" data-type="entity-link" >CreateProfesseurDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUtilisateurDto.html" data-type="entity-link" >CreateUtilisateurDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClasseDto.html" data-type="entity-link" >UpdateClasseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEleveDto.html" data-type="entity-link" >UpdateEleveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMatiereDto.html" data-type="entity-link" >UpdateMatiereDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNoteDto.html" data-type="entity-link" >UpdateNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateParentDto.html" data-type="entity-link" >UpdateParentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfesseurDto.html" data-type="entity-link" >UpdateProfesseurDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUtilisateurDto.html" data-type="entity-link" >UpdateUtilisateurDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EleveMoyenneGuard.html" data-type="entity-link" >EleveMoyenneGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/EleveNoteGuard.html" data-type="entity-link" >EleveNoteGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProfesseurGuard.html" data-type="entity-link" >ProfesseurGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});