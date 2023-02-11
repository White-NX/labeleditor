"use strict";(self["webpackChunkmodulecreator"]=self["webpackChunkmodulecreator"]||[]).push([[8401],{78401:function(e,t,i){i.r(t),i.d(t,{Adapter:function(){return _},CodeActionAdaptor:function(){return M},DefinitionAdapter:function(){return A},DiagnosticsAdapter:function(){return w},FormatAdapter:function(){return N},FormatHelper:function(){return O},FormatOnTypeAdapter:function(){return K},InlayHintsAdapter:function(){return E},Kind:function(){return I},LibFiles:function(){return y},OccurrencesAdapter:function(){return C},OutlineAdapter:function(){return F},QuickInfoAdapter:function(){return v},ReferenceAdapter:function(){return D},RenameAdapter:function(){return R},SignatureHelpAdapter:function(){return x},SuggestAdapter:function(){return S},WorkerManager:function(){return m},flattenDiagnosticMessageText:function(){return b},getJavaScriptWorker:function(){return W},getTypeScriptWorker:function(){return j},setupJavaScript:function(){return V},setupTypeScript:function(){return H}});var s=i(47536),n=i(39585),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,c=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t,i,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of o(t))l.call(e,n)||n===i||r(e,n,{get:()=>t[n],enumerable:!(s=a(t,n))||s.enumerable});return e},d=(e,t,i)=>(u(e,t,"default"),i&&u(i,t,"default")),g=(e,t,i)=>(c(e,"symbol"!==typeof t?t+"":t,i),i),p={};d(p,s);var m=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=p.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(p.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},f={};function b(e,t,i=0){if("string"===typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const n of e.next)s+=b(n,t,i);return s}function h(e){return e?e.map((e=>e.text)).join(""):""}f["lib.d.ts"]=!0,f["lib.dom.d.ts"]=!0,f["lib.dom.iterable.d.ts"]=!0,f["lib.es2015.collection.d.ts"]=!0,f["lib.es2015.core.d.ts"]=!0,f["lib.es2015.d.ts"]=!0,f["lib.es2015.generator.d.ts"]=!0,f["lib.es2015.iterable.d.ts"]=!0,f["lib.es2015.promise.d.ts"]=!0,f["lib.es2015.proxy.d.ts"]=!0,f["lib.es2015.reflect.d.ts"]=!0,f["lib.es2015.symbol.d.ts"]=!0,f["lib.es2015.symbol.wellknown.d.ts"]=!0,f["lib.es2016.array.include.d.ts"]=!0,f["lib.es2016.d.ts"]=!0,f["lib.es2016.full.d.ts"]=!0,f["lib.es2017.d.ts"]=!0,f["lib.es2017.full.d.ts"]=!0,f["lib.es2017.intl.d.ts"]=!0,f["lib.es2017.object.d.ts"]=!0,f["lib.es2017.sharedmemory.d.ts"]=!0,f["lib.es2017.string.d.ts"]=!0,f["lib.es2017.typedarrays.d.ts"]=!0,f["lib.es2018.asyncgenerator.d.ts"]=!0,f["lib.es2018.asynciterable.d.ts"]=!0,f["lib.es2018.d.ts"]=!0,f["lib.es2018.full.d.ts"]=!0,f["lib.es2018.intl.d.ts"]=!0,f["lib.es2018.promise.d.ts"]=!0,f["lib.es2018.regexp.d.ts"]=!0,f["lib.es2019.array.d.ts"]=!0,f["lib.es2019.d.ts"]=!0,f["lib.es2019.full.d.ts"]=!0,f["lib.es2019.object.d.ts"]=!0,f["lib.es2019.string.d.ts"]=!0,f["lib.es2019.symbol.d.ts"]=!0,f["lib.es2020.bigint.d.ts"]=!0,f["lib.es2020.d.ts"]=!0,f["lib.es2020.full.d.ts"]=!0,f["lib.es2020.intl.d.ts"]=!0,f["lib.es2020.promise.d.ts"]=!0,f["lib.es2020.sharedmemory.d.ts"]=!0,f["lib.es2020.string.d.ts"]=!0,f["lib.es2020.symbol.wellknown.d.ts"]=!0,f["lib.es2021.d.ts"]=!0,f["lib.es2021.full.d.ts"]=!0,f["lib.es2021.intl.d.ts"]=!0,f["lib.es2021.promise.d.ts"]=!0,f["lib.es2021.string.d.ts"]=!0,f["lib.es2021.weakref.d.ts"]=!0,f["lib.es5.d.ts"]=!0,f["lib.es6.d.ts"]=!0,f["lib.esnext.d.ts"]=!0,f["lib.esnext.full.d.ts"]=!0,f["lib.esnext.intl.d.ts"]=!0,f["lib.esnext.promise.d.ts"]=!0,f["lib.esnext.string.d.ts"]=!0,f["lib.esnext.weakref.d.ts"]=!0,f["lib.scripthost.d.ts"]=!0,f["lib.webworker.d.ts"]=!0,f["lib.webworker.importscripts.d.ts"]=!0,f["lib.webworker.iterable.d.ts"]=!0;var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:n,column:r}=i,{lineNumber:a,column:o}=s;return{startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o}}},y=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!f[e.path.slice(1)])}getOrCreateModel(e){const t=p.Uri.parse(e),i=p.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return p.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=n.typescriptDefaults.getExtraLibs()[e];return s?p.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},w=class extends _{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const n=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const n=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),r=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():p.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){n.dispose(),r.dispose(),clearTimeout(s)}},t()},r=e=>{p.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(p.editor.onDidCreateModel((e=>n(e)))),this._disposables.push(p.editor.onWillDisposeModel(r)),this._disposables.push(p.editor.onDidChangeModelLanguage((e=>{r(e.model),n(e.model)}))),this._disposables.push({dispose(){for(const e of p.editor.getModels())r(e)}});const a=()=>{for(const e of p.editor.getModels())r(e),n(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),p.editor.getModels().forEach((e=>n(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:n,noSuggestionDiagnostics:r}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),n||i.push(t.getSemanticDiagnostics(e.uri.toString())),r||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?p.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||p.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:n,column:r}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(p.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(p.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o,message:b(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const n=t.start||0,r=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(n),{lineNumber:l,column:c}=s.getPositionAt(n+r);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:b(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return p.MarkerSeverity.Error;case 3:return p.MarkerSeverity.Info;case 0:return p.MarkerSeverity.Warning;case 2:return p.MarkerSeverity.Hint}return p.MarkerSeverity.Info}},S=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const n=e.getWordUntilPosition(t),r=new p.Range(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const c=await l.getCompletionsAtPosition(a.toString(),o);if(!c||e.isDisposed())return;const u=c.entries.map((i=>{let s=r;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),n=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new p.Range(t.lineNumber,t.column,n.lineNumber,n.column)}const n=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&n.push(p.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:S.convertKind(i.kind),tags:n}}));return{suggestions:u}}async resolveCompletionItem(e,t){const i=e,s=i.uri,n=i.position,r=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),r,i.label);return o?{uri:s,position:n,label:o.name,kind:S.convertKind(o.kind),detail:h(o.displayParts),documentation:{value:S.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case I.primitiveType:case I.keyword:return p.languages.CompletionItemKind.Keyword;case I.variable:case I.localVariable:return p.languages.CompletionItemKind.Variable;case I.memberVariable:case I.memberGetAccessor:case I.memberSetAccessor:return p.languages.CompletionItemKind.Field;case I.function:case I.memberFunction:case I.constructSignature:case I.callSignature:case I.indexSignature:return p.languages.CompletionItemKind.Function;case I.enum:return p.languages.CompletionItemKind.Enum;case I.module:return p.languages.CompletionItemKind.Module;case I.class:return p.languages.CompletionItemKind.Class;case I.interface:return p.languages.CompletionItemKind.Interface;case I.warning:return p.languages.CompletionItemKind.File}return p.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=h(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${k(i)}`;return t}};function k(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var x=class extends _{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case p.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case p.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case p.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(n.toString(),r,{triggerReason:x._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:h(e.documentation)},t.label+=h(e.prefixDisplayParts),e.parameters.forEach(((i,s,n)=>{const r=h(i.displayParts),a={label:r,documentation:{value:h(i.documentation)}};t.label+=r,t.parameters.push(a),s<n.length-1&&(t.label+=h(e.separatorDisplayParts))})),t.label+=h(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},v=class extends _{async provideHover(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getQuickInfoAtPosition(s.toString(),n);if(!a||e.isDisposed())return;const o=h(a.documentation),l=a.tags?a.tags.map((e=>k(e))).join("  \n\n"):"",c=h(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},C=class extends _{async provideDocumentHighlights(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getOccurrencesAtPosition(s.toString(),n);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?p.languages.DocumentHighlightKind.Write:p.languages.DocumentHighlightKind.Text}))):void 0}},A=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getDefinitionAtPosition(s.toString(),n);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>p.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let l of a){const e=this._libFiles.getOrCreateModel(l.fileName);e&&o.push({uri:e.uri,range:this._textSpanToRange(e,l.textSpan)})}return o}},D=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(n.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>p.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let c of o){const e=this._libFiles.getOrCreateModel(c.fileName);e&&l.push({uri:e.uri,range:this._textSpanToRange(e,c.textSpan)})}return l}},F=class extends _{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const n=await s.getNavigationBarItems(i.toString());if(!n||e.isDisposed())return;const r=(t,i,s)=>{let n={name:i.text,detail:"",kind:L[i.kind]||p.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(n.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)r(t,e,n.name);t.push(n)};let a=[];return n.forEach((e=>r(a,e))),a}},I=class{};g(I,"unknown",""),g(I,"keyword","keyword"),g(I,"script","script"),g(I,"module","module"),g(I,"class","class"),g(I,"interface","interface"),g(I,"type","type"),g(I,"enum","enum"),g(I,"variable","var"),g(I,"localVariable","local var"),g(I,"function","function"),g(I,"localFunction","local function"),g(I,"memberFunction","method"),g(I,"memberGetAccessor","getter"),g(I,"memberSetAccessor","setter"),g(I,"memberVariable","property"),g(I,"constructorImplementation","constructor"),g(I,"callSignature","call"),g(I,"indexSignature","index"),g(I,"constructSignature","construct"),g(I,"parameter","parameter"),g(I,"typeParameter","type parameter"),g(I,"primitiveType","primitive type"),g(I,"label","label"),g(I,"alias","alias"),g(I,"const","const"),g(I,"let","let"),g(I,"warning","warning");var L=Object.create(null);L[I.module]=p.languages.SymbolKind.Module,L[I.class]=p.languages.SymbolKind.Class,L[I.enum]=p.languages.SymbolKind.Enum,L[I.interface]=p.languages.SymbolKind.Interface,L[I.memberFunction]=p.languages.SymbolKind.Method,L[I.memberVariable]=p.languages.SymbolKind.Property,L[I.memberGetAccessor]=p.languages.SymbolKind.Property,L[I.memberSetAccessor]=p.languages.SymbolKind.Property,L[I.variable]=p.languages.SymbolKind.Variable,L[I.const]=p.languages.SymbolKind.Variable,L[I.localVariable]=p.languages.SymbolKind.Variable,L[I.variable]=p.languages.SymbolKind.Variable,L[I.function]=p.languages.SymbolKind.Function,L[I.localFunction]=p.languages.SymbolKind.Function;var T,P,O=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},N=class extends O{async provideDocumentRangeFormattingEdits(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(n.toString(),r,a,O._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},K=class extends O{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,n){const r=e.uri,a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(r.toString(),a,i,O._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},M=class extends O{async provideCodeActions(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=O._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(n);if(e.isDisposed())return;const u=await c.getCodeFixesAtPosition(n.toString(),r,a,l,o);if(!u||e.isDisposed())return{actions:[],dispose:()=>{}};const d=u.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t)));return{actions:d,dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,t.span),text:t.newText}});const n={title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"};return n}},R=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const n=e.uri,r=n.toString(),a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getRenameInfo(r,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(r,a,!1,!1,!1);if(!c||e.isDisposed())return;const u=[];for(const d of c){const e=this._libFiles.getOrCreateModel(d.fileName);if(!e)throw new Error(`Unknown file ${d.fileName}.`);u.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,d.textSpan),text:i}})}return{edits:u}}},E=class extends _{async provideInlayHints(e,t,i){const s=e.uri,n=s.toString(),r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return null;const l=await o.provideInlayHints(n,r,a),c=l.map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)})));return{hints:c,dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return p.languages.InlayHintKind.Parameter;case"Type":return p.languages.InlayHintKind.Type;default:return p.languages.InlayHintKind.Type}}};function H(e){P=B(e,"typescript")}function V(e){T=B(e,"javascript")}function W(){return new Promise(((e,t)=>{if(!T)return t("JavaScript not registered!");e(T)}))}function j(){return new Promise(((e,t)=>{if(!P)return t("TypeScript not registered!");e(P)}))}function B(e,t){const i=new m(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),n=new y(s);return p.languages.registerCompletionItemProvider(t,new S(s)),p.languages.registerSignatureHelpProvider(t,new x(s)),p.languages.registerHoverProvider(t,new v(s)),p.languages.registerDocumentHighlightProvider(t,new C(s)),p.languages.registerDefinitionProvider(t,new A(n,s)),p.languages.registerReferenceProvider(t,new D(n,s)),p.languages.registerDocumentSymbolProvider(t,new F(s)),p.languages.registerDocumentRangeFormattingEditProvider(t,new N(s)),p.languages.registerOnTypeFormattingEditProvider(t,new K(s)),p.languages.registerCodeActionProvider(t,new M(s)),p.languages.registerRenameProvider(t,new R(n,s)),p.languages.registerInlayHintsProvider(t,new E(s)),new w(n,e,t,s),s}}}]);
//# sourceMappingURL=8401.6e48d5d8.js.map