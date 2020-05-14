goog.provide('threatmodeler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('goog.string.format');
var module$node_modules$react_moveable$dist$moveable_cjs=shadow.js.require("module$node_modules$react_moveable$dist$moveable_cjs", {});
goog.require('cljs.test');
goog.require('reagent_keybindings.keyboard');
goog.require('clojure.set');
threatmodeler.core.html_element__GT_element_id = (function threatmodeler$core$html_element__GT_element_id(element){
return element.dataset.elementId;
});
threatmodeler.core.threat_examples = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file-uploads","file-uploads",-280084287),new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"content-over-http","content-over-http",819021729),new cljs.core.Keyword(null,"session-fixation","session-fixation",1603298),new cljs.core.Keyword(null,"session-generation","session-generation",-15776764),new cljs.core.Keyword(null,"connected-to-network","connected-to-network",1451896805),new cljs.core.Keyword(null,"third-party-components","third-party-components",516438759),new cljs.core.Keyword(null,"smb","smb",-1218460184),new cljs.core.Keyword(null,"cookies","cookies",1839416329),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"desktop-application","desktop-application",1959232459),new cljs.core.Keyword(null,"tls","tls",67511053),new cljs.core.Keyword(null,"deauthentication","deauthentication",-1016940433),new cljs.core.Keyword(null,"encrypt-or-sign-data","encrypt-or-sign-data",-207053393),new cljs.core.Keyword(null,"linux-proc","linux-proc",1958592912),new cljs.core.Keyword(null,"db-injection","db-injection",-658610608),new cljs.core.Keyword(null,"cleartext-password-storage","cleartext-password-storage",-1556352112),new cljs.core.Keyword(null,"jwt","jwt",1504015441),new cljs.core.Keyword(null,"xxe","xxe",-178855727),new cljs.core.Keyword(null,"weak-reset-password-flow","weak-reset-password-flow",-695859502),new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"xxs","xxs",-16722349),new cljs.core.Keyword(null,"race-condition","race-condition",-2009671496),new cljs.core.Keyword(null,"memory-corruption","memory-corruption",-769418887),new cljs.core.Keyword(null,"sensitive-data","sensitive-data",-619043526),new cljs.core.Keyword(null,"machine-learning-taint-data","machine-learning-taint-data",820593114),new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"password-complexity","password-complexity",1503775067),new cljs.core.Keyword(null,"serialization","serialization",-471429060),new cljs.core.Keyword(null,"command-launching","command-launching",1688449820),new cljs.core.Keyword(null,"machine-learning-train-against-model","machine-learning-train-against-model",-1555130721)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Users can upload files.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"If files are saved to disk, perform path canonicalization on files and ensure target file is under expected directory and path. Restrict what type of data can be uploaded. If users can download files, set the appropriate mime-type presenting the data. Avoid allowing executable to be uploaded."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Data is deleted or corrupted.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Backup data. Ensure a recovery process is created and tested a-head of time before needed. Backing up data to a remote locaiton is highly recommended."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"User Connects Over HTTP",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Configure HSTS Reloading. Return Strict Transport Security header, and include sub domains. Redirect HTTP to HTTPS."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker forces target user to authentication under an attacker-controlled account. Attackers may modify URLs which accept authentication id/tokens to force authenticate users. Attacker may force users submit login forms to authentication as the attacker too.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Verify authenticator with requests, such as with anti Cross-Site Request Forgery tokens."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Session IDs can be brute-forced, or recovered due to being generated weakly.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Ensure sessions are generated from a cryptographically secure random number generator, which contain a sufficient amount of entropy, such as 128 bits."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Host is connected to a network, exposing network devices to internet.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Add firewall rules to restrict inbound and output traffic."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker breaks in to system due to vulnerabilities in third party components.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Keep third-party components up to date with latest security patches. Ensure trusted components are used. If untrusted components ar required, consider sandboxing the components from accessing sensitive data."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"NTLM hases are leaked to attackers due to processing malicious URIs",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Block outbound SMB traffic, if possible. Set the policy \"Network Security: Restrict NTLM: Outgoing NTLM traffic to remote servers\" to deny all."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"User authenticates with cookies.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Use cookie security flags to protect information (SameSite,HTTPOnly,Secure)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Root file system is mounted within docker container, allowing host to be compromised.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Limit file system exposed to docker."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Application is exploited, allowing access to user files.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Leverage OS APIs to sandbox the application. See https://chromium.googlesource.com/chromium/src/+/master/docs/design/sandbox.md for examples."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Sensitive data transferred over the network.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Use Transport Layer Security to secure communications. Ensure strong cipher-suites and parameters are used."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"User can't sign out.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Determine appropriate amount of time for sessions to time out. When a user clicks sign out, contact the remote service terminate the user's session. Ensure that the session id/token can't be used supplied to authentication with the remote service."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Weak cryptography is used, allowing communications to be forged or decrypted.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Use a vetted cryptographic library, such as libsodium, which handles cryptographic operations. Avoid creating or implementing own cryptographic routines, as a wide range of attacks against."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Application is exploited to return contents of /proc/self/mem, or other sensitive proc files.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Mount proc with a hidpid value of 2. Ensure processes are not run as root."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Queries are constructed from user data.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"User  queries. Avoid using string concatenation with database queries and user input. Note data may be possible to  be coerced into arrays or hashmaps by the web server. For NoSQL queries, this can lead to injection of inequality statements."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Database contains credentials.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Use a cryptographically secure hashing algorithm to hash passwords, such as scrypt."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"User authentications with JWT token.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Ensure algorithm \"none\" is not supported. Ensure users can't mix key material with algorithms (ie, use a public key as HMAC secret.)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"User supplied XML is processed, or xpaths are supplied.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Disable Document Type Definition (DTD) parsing and external entity resolving when possible. If XPaths generated from user input is required, use an XPath library which properly encodes user input."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker compromise password reset flows through weak processes (SIM Hijacking/SS7 Spoofing to aquire SMS messages, insufficient amount of entropy in reset links, etc.)",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Generate password reset links which contain a large amount of entropy, such as 128 bits."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Session identifiers are used to identify users.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Generation Session IDs form a cryptographically secure source, such as a CSRPNG. Ensure the length of session IDs are not brute-forceable, such as 128 bits of entropy in length."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Application displays user supplied data",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Encode user input for the appropriate context it appears in (HTML, JavaScript, etc.). Configure Content Security Policies to mitigate processing and communicating with untrusted resources and hosts."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker performs multiple operations simultaneously, causing the application to perform unwanted behavior.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"If possible, perform action synchronously to prevent unwanted side-effects. For example, database/memory transactions and locks can be used to prevent sumptuously updating of sensitive data."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Memory corruption/disclosure vulnerability exists, allowing attacker to influence application or access sensitive data.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Use static analysis, such as by leveraging compiler flags, to detect vulnerable code patterns. If possible, avoid or minimize using languages where memory safety is hard to achieve. Whenever possible, use memory-corruption mitigation's such as ASLR, DEP, and Stack Cookies. Perform fuzzing on applications to discover vulnerabilities."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Sensitive Information is stored (PII, Password Hashes etc.)",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Encrypt sensitive data. Use a vetted cryptography library/service when possible, such as libsodium. Ensure the chosen library makes use of strong cryptography (uses non-broken cryptographic algorithm,  generates keys using a CSRPNG, does not re-use IVs, facilities key rotations, etc.)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker can influence training data.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Review and assign trust-worthiness to data to avoid malicious tainting of data."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Application preview images, such as those shown when switching applications, may disclose sensitive data.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"When the app is notified it will lose focus, overlay the application view with non-sensitive image, such as a banner."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Users can choose weak passwords.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Define and enforce a password complexity policy."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"User supplied data is deserialized",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Use a secure serialization framework/library which can not be leveraged to deserialize arbitrary types (Ex, Avoid BinaryFormatter in .NET). Validate user supplied data to avoid mass assignment vulnerabilities."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker can influence applications/command arguments.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Whenever possible, don't allow the attacker to specify the actual application to run. Validate and sanitize user input. Do not use string concatenation/formatting to build command strings."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Attacker uses application to train their own models.",new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626),"Add rate limiting. Returning fuzzy data may be performed."], null)]);
threatmodeler.core.create_lookup_from_vector_of_hashmaps = (function threatmodeler$core$create_lookup_from_vector_of_hashmaps(id_function,hashmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(id_function,cljs.core.identity),hashmap));
});
threatmodeler.core.threat_element_property_groups = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"scenarios","scenarios",1618559369),cljs.core.PersistentArrayMap.EMPTY], null));
/**
 * Creates lookup of groups and scenarios
 */
threatmodeler.core.add_threat_element_property_group_BANG_ = (function threatmodeler$core$add_threat_element_property_group_BANG_(group_name,scenarios){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.threat_element_property_groups,(function (x){
var scenario_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),scenarios);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_name,scenario_ids], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenarios","scenarios",1618559369)], null),cljs.core.merge,threatmodeler.core.create_lookup_from_vector_of_hashmaps(new cljs.core.Keyword(null,"id","id",-1388402092),scenarios));
}));
});
threatmodeler.core.add_threat_element_property_group_BANG_("Application Type, Language, OS",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"web-application","web-application",95751056),new cljs.core.Keyword(null,"name","name",1843675177),"Web Application",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-over-http","content-over-http",819021729),null,new cljs.core.Keyword(null,"xxs","xxs",-16722349),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unsafe-memory-components","unsafe-memory-components",-103861933),new cljs.core.Keyword(null,"name","name",1843675177),"Unsafe Memory Components (C,C++,Unsafe Rust, Java JNI",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory-corruption","memory-corruption",-769418887),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"desktop-application","desktop-application",1959232459),new cljs.core.Keyword(null,"name","name",1843675177),"Desktop Application",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desktop-application","desktop-application",1959232459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mobile-application","mobile-application",2094976483),new cljs.core.Keyword(null,"name","name",1843675177),"Mobile Application",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"windows","windows",2068861701),new cljs.core.Keyword(null,"name","name",1843675177),"Windows",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"smb","smb",-1218460184),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"linux","linux",-238042662),new cljs.core.Keyword(null,"name","name",1843675177),"Linux",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"linux-proc","linux-proc",1958592912),null], null), null)], null)], null));
threatmodeler.core.add_threat_element_property_group_BANG_("Data Processing",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"name","name",1843675177),"File Upload",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-uploads","file-uploads",-280084287),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),new cljs.core.Keyword(null,"name","name",1843675177),"Deserialize Data",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"serialization","serialization",-471429060),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parses-xml","parses-xml",-811882361),new cljs.core.Keyword(null,"name","name",1843675177),"Parses XML",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xxe","xxe",-178855727),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"display-user-input-as-html","display-user-input-as-html",-1312254869),new cljs.core.Keyword(null,"name","name",1843675177),"Display User Input as HTML/Scripts",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xxs","xxs",-16722349),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"run-system-commands","run-system-commands",-10189643),new cljs.core.Keyword(null,"name","name",1843675177),"Run System Commands",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command-launching","command-launching",1688449820),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-injection","db-injection",-658610608),new cljs.core.Keyword(null,"name","name",1843675177),"Database Queries",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-injection","db-injection",-658610608),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"machine-learning","machine-learning",-2025565057),new cljs.core.Keyword(null,"name","name",1843675177),"Machine Learning",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"machine-learning-taint-data","machine-learning-taint-data",820593114),null,new cljs.core.Keyword(null,"machine-learning-train-against-model","machine-learning-train-against-model",-1555130721),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"race-condition","race-condition",-2009671496),new cljs.core.Keyword(null,"name","name",1843675177),"Operations Order Sensitivity",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"race-condition","race-condition",-2009671496),null], null), null)], null)], null));
threatmodeler.core.add_threat_element_property_group_BANG_("Authentication",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"oauth","oauth",-306386865),new cljs.core.Keyword(null,"name","name",1843675177),"OAuth",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-fixation","session-fixation",1603298),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"jwt","jwt",1504015441),new cljs.core.Keyword(null,"name","name",1843675177),"JWT",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-fixation","session-fixation",1603298),null,new cljs.core.Keyword(null,"deauthentication","deauthentication",-1016940433),null,new cljs.core.Keyword(null,"jwt","jwt",1504015441),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cookies","cookies",1839416329),new cljs.core.Keyword(null,"name","name",1843675177),"Cookies",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-fixation","session-fixation",1603298),null,new cljs.core.Keyword(null,"cookies","cookies",1839416329),null,new cljs.core.Keyword(null,"deauthentication","deauthentication",-1016940433),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"session-ids","session-ids",242197656),new cljs.core.Keyword(null,"name","name",1843675177),"Session Ids",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-fixation","session-fixation",1603298),null,new cljs.core.Keyword(null,"session-generation","session-generation",-15776764),null,new cljs.core.Keyword(null,"deauthentication","deauthentication",-1016940433),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username-and-passwords","username-and-passwords",-987100397),new cljs.core.Keyword(null,"name","name",1843675177),"Username and Passwords",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weak-reset-password-flow","weak-reset-password-flow",-695859502),null,new cljs.core.Keyword(null,"password-complexity","password-complexity",1503775067),null], null), null)], null)], null));
threatmodeler.core.add_threat_element_property_group_BANG_("Cryptography",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"encrypts","encrypts",-903256547),new cljs.core.Keyword(null,"name","name",1843675177),"Encrypts or Signs Data",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encrypt-or-sign-data","encrypt-or-sign-data",-207053393),null], null), null)], null)], null));
threatmodeler.core.add_threat_element_property_group_BANG_("Misc",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"third-party-components","third-party-components",516438759),new cljs.core.Keyword(null,"name","name",1843675177),"Third Party Components",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"third-party-components","third-party-components",516438759),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"name","name",1843675177),"Docker",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"docker","docker",743480170),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"processes-network-traffic","processes-network-traffic",-857253903),new cljs.core.Keyword(null,"name","name",1843675177),"Connected To Network",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected-to-network","connected-to-network",1451896805),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"important-data","important-data",-1123393993),new cljs.core.Keyword(null,"name","name",1843675177),"Stores Important Data",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backup","backup",26347393),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sensitive-data","sensitive-data",-619043526),new cljs.core.Keyword(null,"name","name",1843675177),"Stores Sensitive Data",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sensitive-data","sensitive-data",-619043526),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stores-credentials","stores-credentials",-891900933),new cljs.core.Keyword(null,"name","name",1843675177),"Stores credentials",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cleartext-password-storage","cleartext-password-storage",-1556352112),null], null), null)], null)], null));
threatmodeler.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382),null,new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),null,new cljs.core.Keyword(null,"last-element-dragged","last-element-dragged",47361738),null,new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509),null], null),new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"threats","threats",-7323746),cljs.core.PersistentVector.EMPTY], null)], null));
threatmodeler.core.ui_state = reagent.core.cursor(threatmodeler.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351)], null));
threatmodeler.core.threat_model = reagent.core.cursor(threatmodeler.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298)], null));
threatmodeler.core.toggle_value_in_set = (function threatmodeler$core$toggle_value_in_set(input_set,value){
var fexpr__37189 = ((cljs.core.contains_QMARK_(input_set,value))?cljs.core.disj:cljs.core.conj);
return (fexpr__37189.cljs$core$IFn$_invoke$arity$2 ? fexpr__37189.cljs$core$IFn$_invoke$arity$2(input_set,value) : fexpr__37189.call(null,input_set,value));
});
threatmodeler.core.property_id__GT_property = (function threatmodeler$core$property_id__GT_property(property_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_element_property_groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenarios","scenarios",1618559369),property_id], null));
});
threatmodeler.core.property_ids_to_threat_ids = (function threatmodeler$core$property_ids_to_threat_ids(property_ids){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"threats","threats",-7323746),cljs.core.map.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.property_id__GT_property,property_ids))));
});
threatmodeler.core.update_element_threat_ids_from_property_ids = (function threatmodeler$core$update_element_threat_ids_from_property_ids(element){
var threat_ids = threatmodeler.core.property_ids_to_threat_ids(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(element));
return cljs.core.assoc_in(element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threats","threats",-7323746)], null),threat_ids);
});
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.create_base_element !== 'undefined')){
} else {
threatmodeler.core.create_base_element = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37190 = cljs.core.get_global_hierarchy;
return (fexpr__37190.cljs$core$IFn$_invoke$arity$0 ? fexpr__37190.cljs$core$IFn$_invoke$arity$0() : fexpr__37190.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threatmodeler.core","create-base-element"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
threatmodeler.core.create_base_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"actor","actor",-1830560481),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"name","name",1843675177),"TODO",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashSet.EMPTY], null),d], 0));
}));
threatmodeler.core.create_base_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"process","process",1643192938),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"name","name",1843675177),"TODO",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashSet.EMPTY], null),d], 0));
}));
threatmodeler.core.create_base_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datastore","datastore",-762786373),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"name","name",1843675177),"TODO",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashSet.EMPTY], null),d], 0));
}));
threatmodeler.core.create_base_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashSet.EMPTY], null),d], 0));
}));
threatmodeler.core.create_base_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"communication","communication",1734879700),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashSet.EMPTY], null),d], 0));
}));
threatmodeler.core.create_element = (function threatmodeler$core$create_element(data){
return threatmodeler.core.update_element_threat_ids_from_property_ids(threatmodeler.core.create_base_element.cljs$core$IFn$_invoke$arity$1(data));
});
threatmodeler.core.add_element = (function threatmodeler$core$add_element(app_state,data){

var element = threatmodeler.core.create_element(data);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element)], null),element);
});
threatmodeler.core.toggle_element_property_for_element = (function threatmodeler$core$toggle_element_property_for_element(app_state,element_id,property_id){
var updated_property_ids = threatmodeler.core.toggle_value_in_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),element_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null)),property_id);
var updated_threat_ids = threatmodeler.core.property_ids_to_threat_ids(updated_property_ids);
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),element_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null),updated_property_ids),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),element_id,new cljs.core.Keyword(null,"threats","threats",-7323746)], null),updated_threat_ids);
});
/**
 * Adds threats to a given element
 */
threatmodeler.core.toggle_element_property_for_element_BANG_ = (function threatmodeler$core$toggle_element_property_for_element_BANG_(element_id,property){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.app_state,threatmodeler.core.toggle_element_property_for_element,element_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property));
});
/**
 * Adds element to threat model, and udpates corresponding atom.
 */
threatmodeler.core.add_element_BANG_ = (function threatmodeler$core$add_element_BANG_(data){
var element = threatmodeler.core.create_element(data);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.app_state,threatmodeler.core.add_element,data);
});
threatmodeler.core.filter_elements_referencing_element_id = (function threatmodeler$core$filter_elements_referencing_element_id(element_id,element){

return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(cljs.core.select_keys(element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))),element_id);
});
/**
 * Deletes element from threat model, and any communications referencing it
 */
threatmodeler.core.delete_element_and_communications = (function threatmodeler$core$delete_element_and_communications(app_state,element){
var referencing_elements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.filter_elements_referencing_element_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element)),cljs.core.vals(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"threat-model","threat-model",662425298).cljs$core$IFn$_invoke$arity$1(app_state))));
var referencing_element_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),referencing_elements);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735)], null),(function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,x,app_state,referencing_element_ids);
}));
});
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.delete_element !== 'undefined')){
} else {
threatmodeler.core.delete_element = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37191 = cljs.core.get_global_hierarchy;
return (fexpr__37191.cljs$core$IFn$_invoke$arity$0 ? fexpr__37191.cljs$core$IFn$_invoke$arity$0() : fexpr__37191.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threatmodeler.core","delete-element"),(function (app_state,element){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
threatmodeler.core.delete_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"communication","communication",1734879700),(function (app_state,element){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element));
}));
threatmodeler.core.delete_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app_state,element){
return threatmodeler.core.delete_element_and_communications(app_state,element);
}));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"name","name",1843675177),"Web User",new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"id","id",-1388402092),"webuser",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username-and-passwords","username-and-passwords",-987100397),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"name","name",1843675177),"webapp",new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(125),new cljs.core.Keyword(null,"id","id",-1388402092),"webapp1",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"name","name",1843675177),"third party",new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(125),new cljs.core.Keyword(null,"id","id",-1388402092),"webapp2",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"third-party-components","third-party-components",516438759),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"name","name",1843675177),"database",new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"id","id",-1388402092),"datastore1",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"important-data","important-data",-1123393993),null,new cljs.core.Keyword(null,"sensitive-data","sensitive-data",-619043526),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"webuser",new cljs.core.Keyword(null,"to","to",192099007),"webapp1",new cljs.core.Keyword(null,"name","name",1843675177),"communication1",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tls","tls",67511053),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"webapp1",new cljs.core.Keyword(null,"to","to",192099007),"datastore1",new cljs.core.Keyword(null,"name","name",1843675177),"communication2",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tls","tls",67511053),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"webapp1",new cljs.core.Keyword(null,"to","to",192099007),"webapp2",new cljs.core.Keyword(null,"name","name",1843675177),"communication3",new cljs.core.Keyword(null,"threats","threats",-7323746),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tls","tls",67511053),null], null), null)], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"name","name",1843675177),"boundary1"], null)));
/**
 * Sets the active element which can be moved and dragged around.
 * If an item is currently being transformed, the active element is not updated.
 */
threatmodeler.core.set_active_moveable_element_BANG_ = (function threatmodeler$core$set_active_moveable_element_BANG_(id,e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382),id);
}
});
threatmodeler.core.moveable = reagent.core.adapt_react_class(module$node_modules$react_moveable$dist$moveable_cjs);
threatmodeler.core.calculate_line_points = (function threatmodeler$core$calculate_line_points(element1,element2){

if(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1)) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1)),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element1) / (2))),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2),new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element2) / (2)))], null);
} else {
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) > (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2)),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element2) / (2))),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1),new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element1) / (2)))], null);
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1) / (2))),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2) / (2))),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2) / (2))),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element2)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1) / (2))),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1)], null);

}
}
}
});
threatmodeler.core.render_line = (function threatmodeler$core$render_line(p__37192){
var map__37193 = p__37192;
var map__37193__$1 = (((((!((map__37193 == null))))?(((((map__37193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37193):map__37193);
var line = map__37193__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lineLength = Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
var slope = ((y1 - y2) / (x1 - x2));
var rotationDegree = (((((x1 >= x2)) && ((y1 < y2))))?(Math.PI - ((-1) * Math.atan(slope))):Math.atan(slope));
var style__$1 = (function (){var or__4185__auto__ = style;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "solid";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line.diagram-threat-model-element","div.line.diagram-threat-model-element",-1685853637),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"width","width",-384071477),goog.string.format("%dpx",lineLength),new cljs.core.Keyword(null,"border-top","border-top",-158897573),goog.string.format("2px %s black",style__$1),new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx) rotate(%frad)",x1,y1,rotationDegree),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center left",new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(new cljs.core.Keyword(null,"draggable","draggable",1676206163).cljs$core$IFn$_invoke$arity$1(line))?"5px":"0")], null),new cljs.core.Keyword(null,"data-element-id","data-element-id",-1177142464),id,new cljs.core.Keyword(null,"class","class",-2030961996),["moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.set_active_moveable_element_BANG_,id)], null)], null);
});
/**
 * Given a HTML element and selector, find the closest node to it.
 * If the selector matches the given node, return the curret node.
 */
threatmodeler.core.get_closest_html_element = (function threatmodeler$core$get_closest_html_element(element,selector){
return element.closest(selector);
});
/**
 * Handles on mouse up event for diagram elements.
 * Used to connect diagram elements together when shift key is 
 * held while clicking elements.
 */
threatmodeler.core.diagram_element_event_on_mouse_up_BANG_ = (function threatmodeler$core$diagram_element_event_on_mouse_up_BANG_(element_id,e){
if(cljs.core.truth_(e.shiftKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.app_state,(function (state){
var last_item_shift_clicked = new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(last_item_shift_clicked)){
return cljs.core.assoc_in(threatmodeler.core.add_element(state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),last_item_shift_clicked,new cljs.core.Keyword(null,"to","to",192099007),element_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509)], null),null);
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509)], null),element_id);
}
}));
} else {
return null;
}
});
threatmodeler.core.render_threat_model_element_common = (function threatmodeler$core$render_threat_model_element_common(p__37195){
var map__37196 = p__37195;
var map__37196__$1 = (((((!((map__37196 == null))))?(((((map__37196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37196):map__37196);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rotate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.diagram-threat-model-element","span.diagram-threat-model-element",-160914358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["diagram-",cljs.core.name(type)," moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx) rotate(%ddeg)",x,y,(function (){var or__4185__auto__ = rotate;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})())], null),new cljs.core.Keyword(null,"data-element-id","data-element-id",-1177142464),id,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.diagram_element_event_on_mouse_up_BANG_,id),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.set_active_moveable_element_BANG_,id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null)], null);
});
threatmodeler.core.handle_backspace_pressed_BANG_ = (function threatmodeler$core$handle_backspace_pressed_BANG_(){

var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var current_element_id = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),current_element_id], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var current_element = temp__5735__auto____$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.app_state,threatmodeler.core.delete_element,current_element);
} else {
return null;
}
} else {
return null;
}
});
threatmodeler.core.handle_enter_pressed_BANG_ = (function threatmodeler$core$handle_enter_pressed_BANG_(){

var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var current_element_id = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),current_element_id], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var current_element = temp__5735__auto____$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),current_element_id,new cljs.core.Keyword(null,"name","name",1843675177)], null),prompt("Element name:",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_element)));
} else {
return null;
}
} else {
return null;
}
});
threatmodeler.core.render_threat_model_element_communication = (function threatmodeler$core$render_threat_model_element_communication(element,elements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.render_line,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),threatmodeler.core.calculate_line_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(element)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(element)))], 0))], null);
});
threatmodeler.core.render_threat_model_element_boundary = (function threatmodeler$core$render_threat_model_element_boundary(element,elements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.render_line,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([element,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),"dashed",new cljs.core.Keyword(null,"draggable","draggable",1676206163),true], null)], 0))], null);
});
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.render_threat_model_element !== 'undefined')){
} else {
threatmodeler.core.render_threat_model_element = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37198 = cljs.core.get_global_hierarchy;
return (fexpr__37198.cljs$core$IFn$_invoke$arity$0 ? fexpr__37198.cljs$core$IFn$_invoke$arity$0() : fexpr__37198.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threatmodeler.core","render-threat-model-element"),(function (element,_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"actor","actor",-1830560481),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"process","process",1643192938),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datastore","datastore",-762786373),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"communication","communication",1734879700),(function (element,elements){
return threatmodeler.core.render_threat_model_element_communication(element,elements);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.toolbar = (function threatmodeler$core$toolbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)));
})], null),"Add Actor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null)));
})], null),"Add Process"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)));
})], null),"Add Datastore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)));
})], null),"Add Trust Boundary"], null)], null);
});
threatmodeler.core.diagram_event_element_drag_stop = (function threatmodeler$core$diagram_event_element_drag_stop(id,event,data){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),id], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.lastX,new cljs.core.Keyword(null,"y","y",-1757859776),data.lastY], null)], 0));
});
threatmodeler.core.moveable_on_rotate_start_BANG_ = (function threatmodeler$core$moveable_on_rotate_start_BANG_(event){

var active_element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var cur_element_rotation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),active_element_id,new cljs.core.Keyword(null,"rotate","rotate",152705015)], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382),active_element_id,new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),true,new cljs.core.Keyword(null,"orig-rotate","orig-rotate",295073275),cur_element_rotation], null));
});
threatmodeler.core.moveable_on_rotate_BANG_ = (function threatmodeler$core$moveable_on_rotate_BANG_(event){
var active_element_id = new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.app_state)));
var element_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),active_element_id], null));
var rotate_amount = (new cljs.core.Keyword(null,"orig-rotate","orig-rotate",295073275).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.app_state))) + (event.beforeRotate | (0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"rotate-amount","rotate-amount",639596080)], null),rotate_amount);

return (event.target.style.transform = goog.string.format("translate(%dpx,%dpx) rotate(%ddeg)",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element_info),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element_info),rotate_amount));
});
threatmodeler.core.moveable_rotate_end_BANG_ = (function threatmodeler$core$moveable_rotate_end_BANG_(event){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.app_state,(function (state){
var element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var rotate_amount = new cljs.core.Keyword(null,"rotate-amount","rotate-amount",639596080).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),element_id,new cljs.core.Keyword(null,"rotate","rotate",152705015)], null),rotate_amount),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414)], null),null);
}));
});
threatmodeler.core.moveable_drag_start_BANG_ = (function threatmodeler$core$moveable_drag_start_BANG_(event){
var element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var cur_element_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),element_id], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),true,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core.select_keys(cur_element_info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rotate","rotate",152705015)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newX","newX",-90483607),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur_element_info),new cljs.core.Keyword(null,"newY","newY",-1472730860),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cur_element_info)], null)], 0));
});
threatmodeler.core.moveable_drag_on_BANG_ = (function threatmodeler$core$moveable_drag_on_BANG_(event){
var last_element_dragged_deref = cljs.core.deref(threatmodeler.core.ui_state);
var newX = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref) + event.left);
var newY = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref) + event.top);
var rotate = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var element_id = new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newX","newX",-90483607),newX,new cljs.core.Keyword(null,"newY","newY",-1472730860),newY], null));

return (event.target.style.transform = goog.string.format("translate(%dpx,%dpx) rotate(%ddeg)",newX,newY,rotate));
});
threatmodeler.core.moveable_drag_end_BANG_ = (function threatmodeler$core$moveable_drag_end_BANG_(){
var ui_state_derefed_37226 = cljs.core.deref(threatmodeler.core.ui_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(ui_state_derefed_37226)], null),(function (cur_val){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cur_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"newX","newX",-90483607).cljs$core$IFn$_invoke$arity$1(ui_state_derefed_37226),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"newY","newY",-1472730860).cljs$core$IFn$_invoke$arity$1(ui_state_derefed_37226)], null)], 0));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),null);
});
threatmodeler.core.instructions = (function threatmodeler$core$instructions(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Controls",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Connect element: Shift-click two elements to connect elements",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Delete element: Move mouse over element and press backspace key",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Rename-element: Move mouse over element and press enter key"], null)], null);
});
threatmodeler.core.render_threat_element_property_groups = (function threatmodeler$core$render_threat_element_property_groups(element_id,property_groups){
var active_element = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),element_id], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.threat-element-property-groups","div.threat-element-property-groups",-1471481462),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function threatmodeler$core$render_threat_element_property_groups_$_iter__37200(s__37201){
return (new cljs.core.LazySeq(null,(function (){
var s__37201__$1 = s__37201;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37201__$1);
if(temp__5735__auto__){
var s__37201__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37201__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37201__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37203 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37202 = (0);
while(true){
if((i__37202 < size__4581__auto__)){
var vec__37204 = cljs.core._nth(c__4580__auto__,i__37202);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37204,(0),null);
var scenario_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37204,(1),null);
cljs.core.chunk_append(b__37203,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checklist-with-header","div.checklist-with-header",656683266),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),group_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__37202,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element){
return (function threatmodeler$core$render_threat_element_property_groups_$_iter__37200_$_iter__37207(s__37208){
return (new cljs.core.LazySeq(null,((function (i__37202,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element){
return (function (){
var s__37208__$1 = s__37208;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37208__$1);
if(temp__5735__auto____$1){
var s__37208__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37208__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__37208__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__37210 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__37209 = (0);
while(true){
if((i__37209 < size__4581__auto____$1)){
var property = cljs.core._nth(c__4580__auto____$1,i__37209);
cljs.core.chunk_append(b__37210,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(active_element),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37209,i__37202,property,c__4580__auto____$1,size__4581__auto____$1,b__37210,s__37208__$2,temp__5735__auto____$1,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element){
return (function (){
return threatmodeler.core.toggle_element_property_for_element_BANG_(element_id,property);
});})(i__37209,i__37202,property,c__4580__auto____$1,size__4581__auto____$1,b__37210,s__37208__$2,temp__5735__auto____$1,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property)], null)], null));

var G__37227 = (i__37209 + (1));
i__37209 = G__37227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37210),threatmodeler$core$render_threat_element_property_groups_$_iter__37200_$_iter__37207(cljs.core.chunk_rest(s__37208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37210),null);
}
} else {
var property = cljs.core.first(s__37208__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(active_element),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37202,property,s__37208__$2,temp__5735__auto____$1,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element){
return (function (){
return threatmodeler.core.toggle_element_property_for_element_BANG_(element_id,property);
});})(i__37202,property,s__37208__$2,temp__5735__auto____$1,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property)], null)], null),threatmodeler$core$render_threat_element_property_groups_$_iter__37200_$_iter__37207(cljs.core.rest(s__37208__$2)));
}
} else {
return null;
}
break;
}
});})(i__37202,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element))
,null,null));
});})(i__37202,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element))
;
return iter__4582__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37202,iter__4582__auto__,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element){
return (function (p1__37199_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(property_groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenarios","scenarios",1618559369),p1__37199_SHARP_], null));
});})(i__37202,iter__4582__auto__,vec__37204,group_name,scenario_ids,c__4580__auto__,size__4581__auto__,b__37203,s__37201__$2,temp__5735__auto__,active_element))
,scenario_ids));
})())], null)], null));

var G__37228 = (i__37202 + (1));
i__37202 = G__37228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37203),threatmodeler$core$render_threat_element_property_groups_$_iter__37200(cljs.core.chunk_rest(s__37201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37203),null);
}
} else {
var vec__37211 = cljs.core.first(s__37201__$2);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37211,(0),null);
var scenario_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37211,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checklist-with-header","div.checklist-with-header",656683266),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),group_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element){
return (function threatmodeler$core$render_threat_element_property_groups_$_iter__37200_$_iter__37214(s__37215){
return (new cljs.core.LazySeq(null,(function (){
var s__37215__$1 = s__37215;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37215__$1);
if(temp__5735__auto____$1){
var s__37215__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37215__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37215__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37217 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37216 = (0);
while(true){
if((i__37216 < size__4581__auto__)){
var property = cljs.core._nth(c__4580__auto__,i__37216);
cljs.core.chunk_append(b__37217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(active_element),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37216,property,c__4580__auto__,size__4581__auto__,b__37217,s__37215__$2,temp__5735__auto____$1,vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element){
return (function (){
return threatmodeler.core.toggle_element_property_for_element_BANG_(element_id,property);
});})(i__37216,property,c__4580__auto__,size__4581__auto__,b__37217,s__37215__$2,temp__5735__auto____$1,vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property)], null)], null));

var G__37229 = (i__37216 + (1));
i__37216 = G__37229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37217),threatmodeler$core$render_threat_element_property_groups_$_iter__37200_$_iter__37214(cljs.core.chunk_rest(s__37215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37217),null);
}
} else {
var property = cljs.core.first(s__37215__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(active_element),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (property,s__37215__$2,temp__5735__auto____$1,vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element){
return (function (){
return threatmodeler.core.toggle_element_property_for_element_BANG_(element_id,property);
});})(property,s__37215__$2,temp__5735__auto____$1,vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property)], null)], null),threatmodeler$core$render_threat_element_property_groups_$_iter__37200_$_iter__37214(cljs.core.rest(s__37215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element))
;
return iter__4582__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4582__auto__,vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element){
return (function (p1__37199_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(property_groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenarios","scenarios",1618559369),p1__37199_SHARP_], null));
});})(iter__4582__auto__,vec__37211,group_name,scenario_ids,s__37201__$2,temp__5735__auto__,active_element))
,scenario_ids));
})())], null)], null),threatmodeler$core$render_threat_element_property_groups_$_iter__37200(cljs.core.rest(s__37201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(property_groups));
})())], null);
});
threatmodeler.core.threat_search = (function threatmodeler$core$threat_search(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What"], null)], null)], null);
});
threatmodeler.core.threat_table = (function threatmodeler$core$threat_table(active_threat_id){
var active_element = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),active_threat_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#threat-table","table#threat-table",-106845795),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mitigation"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function threatmodeler$core$threat_table_$_iter__37218(s__37219){
return (new cljs.core.LazySeq(null,(function (){
var s__37219__$1 = s__37219;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37219__$1);
if(temp__5735__auto__){
var s__37219__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37219__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37219__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37221 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37220 = (0);
while(true){
if((i__37220 < size__4581__auto__)){
var threat_id = cljs.core._nth(c__4580__auto__,i__37220);
cljs.core.chunk_append(b__37221,(function (){var threat_info = (threatmodeler.core.threat_examples.cljs$core$IFn$_invoke$arity$1 ? threatmodeler.core.threat_examples.cljs$core$IFn$_invoke$arity$1(threat_id) : threatmodeler.core.threat_examples.call(null,threat_id));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(threat_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626).cljs$core$IFn$_invoke$arity$1(threat_info)], null)], null);
})());

var G__37230 = (i__37220 + (1));
i__37220 = G__37230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37221),threatmodeler$core$threat_table_$_iter__37218(cljs.core.chunk_rest(s__37219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37221),null);
}
} else {
var threat_id = cljs.core.first(s__37219__$2);
return cljs.core.cons((function (){var threat_info = (threatmodeler.core.threat_examples.cljs$core$IFn$_invoke$arity$1 ? threatmodeler.core.threat_examples.cljs$core$IFn$_invoke$arity$1(threat_id) : threatmodeler.core.threat_examples.call(null,threat_id));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(threat_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mitigation","mitigation",-1042940626).cljs$core$IFn$_invoke$arity$1(threat_info)], null)], null);
})(),threatmodeler$core$threat_table_$_iter__37218(cljs.core.rest(s__37219__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"threats","threats",-7323746).cljs$core$IFn$_invoke$arity$1(active_element));
})())], null);
});
threatmodeler.core.active_element_name = (function threatmodeler$core$active_element_name(active_threat_id){
var active_element = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),active_threat_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#threats-for","div#threats-for",447326984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.section-label","h5.section-label",1046010943),"Threats for:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.threat-name","h3.threat-name",357987367),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(active_element)], null)], null);
});
threatmodeler.core.simple_example = (function threatmodeler$core$simple_example(threat_model){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#graph-area","div#graph-area",1292963200),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.instructions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.toolbar], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#diagram","div#diagram",-550840655),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function threatmodeler$core$simple_example_$_iter__37222(s__37223){
return (new cljs.core.LazySeq(null,(function (){
var s__37223__$1 = s__37223;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37223__$1);
if(temp__5735__auto__){
var s__37223__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37223__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37223__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37225 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37224 = (0);
while(true){
if((i__37224 < size__4581__auto__)){
var element = cljs.core._nth(c__4580__auto__,i__37224);
cljs.core.chunk_append(b__37225,threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));

var G__37231 = (i__37224 + (1));
i__37224 = G__37231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37225),threatmodeler$core$simple_example_$_iter__37222(cljs.core.chunk_rest(s__37223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37225),null);
}
} else {
var element = cljs.core.first(s__37223__$2);
return cljs.core.cons(threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))),threatmodeler$core$simple_example_$_iter__37222(cljs.core.rest(s__37223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.moveable,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onRotateEnd","onRotateEnd",-1477012704),new cljs.core.Keyword(null,"onDrag","onDrag",779956324),new cljs.core.Keyword(null,"snappable","snappable",-90530806),new cljs.core.Keyword(null,"onRotateStart","onRotateStart",-448043670),new cljs.core.Keyword(null,"throttleDrag","throttleDrag",-195020244),new cljs.core.Keyword(null,"throttleRotate","throttleRotate",1927183151),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"rotatable","rotatable",1507933205),new cljs.core.Keyword(null,"onRotate","onRotate",-1222972361),new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997)],[threatmodeler.core.moveable_rotate_end_BANG_,threatmodeler.core.moveable_drag_on_BANG_,true,threatmodeler.core.moveable_on_rotate_start_BANG_,(25),(15),true,true,threatmodeler.core.moveable_on_rotate_BANG_,threatmodeler.core.moveable_drag_end_BANG_,document.querySelector([".moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))].join('')),threatmodeler.core.moveable_drag_start_BANG_])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.keyboard_listener], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"backspace",threatmodeler.core.handle_backspace_pressed_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"enter",threatmodeler.core.handle_enter_pressed_BANG_], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#threat-input-area","div#threat-input-area",18492236),(cljs.core.truth_(new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.active_element_name,new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.render_threat_element_property_groups,new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)),cljs.core.deref(threatmodeler.core.threat_element_property_groups)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.threat_table,new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Select an element."], null))], null)], null);
});
threatmodeler.core.main_BANG_ = (function threatmodeler$core$main_BANG_(){
return null;
});
goog.exportSymbol('threatmodeler.core.main_BANG_', threatmodeler.core.main_BANG_);
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.simple_example,threatmodeler.core.threat_model], null),document.getElementById("app"));

//# sourceMappingURL=threatmodeler.core.js.map
