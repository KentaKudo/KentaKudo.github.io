(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1439:function(t,e,i){Promise.resolve().then(i.t.bind(i,4205,23)),Promise.resolve().then(i.bind(i,8217))},3598:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return s}});let s=i(5471)._(i(9297)).default.createContext(null)},8217:function(t,e,i){"use strict";i.r(e);var s=i(865);class o extends s.aNw{constructor(t){super(t)}load(t,e,i,o){let n=this,a=new s.hH6(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(t){let i=n.parse(JSON.parse(t));e&&e(i)},i,o)}parse(t){return new n(t)}}class n{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){let i=[],o=function(t,e,i){let o=Array.from(t),n=e/i.resolution,a=(i.boundingBox.yMax-i.boundingBox.yMin+i.underlineThickness)*n,h=[],r=0,l=0;for(let t=0;t<o.length;t++){let e=o[t];if("\n"===e)r=0,l-=a;else{let t=function(t,e,i,o,n){let a,h,r,l,c,d,p,_;let u=n.glyphs[t]||n.glyphs["?"];if(!u){console.error('THREE.Font: character "'+t+'" does not exists in font family '+n.familyName+".");return}let m=new s.T_1;if(u.o){let t=u._cachedOutline||(u._cachedOutline=u.o.split(" "));for(let s=0,n=t.length;s<n;)switch(t[s++]){case"m":a=t[s++]*e+i,h=t[s++]*e+o,m.moveTo(a,h);break;case"l":a=t[s++]*e+i,h=t[s++]*e+o,m.lineTo(a,h);break;case"q":r=t[s++]*e+i,l=t[s++]*e+o,c=t[s++]*e+i,d=t[s++]*e+o,m.quadraticCurveTo(c,d,r,l);break;case"b":r=t[s++]*e+i,l=t[s++]*e+o,c=t[s++]*e+i,d=t[s++]*e+o,p=t[s++]*e+i,_=t[s++]*e+o,m.bezierCurveTo(c,d,p,_,r,l)}}return{offsetX:u.ha*e,path:m}}(e,n,r,l,i);r+=t.offsetX,h.push(t.path)}}return h}(t,e,this.data);for(let t=0,e=o.length;t<e;t++)i.push(...o[t].toShapes());return i}}class a extends s.O7d{constructor(t,e={}){let i=e.font;if(void 0===i)super();else{let s=i.generateShapes(t,e.size);void 0===e.depth&&void 0!==e.height&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=void 0!==e.depth?e.depth:void 0!==e.height?e.height:50,void 0===e.bevelThickness&&(e.bevelThickness=10),void 0===e.bevelSize&&(e.bevelSize=8),void 0===e.bevelEnabled&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}let h={type:"change"},r={type:"start"},l={type:"end"},c=new s.zHn,d=new s.JOQ,p=Math.cos(70*s.M8C.DEG2RAD),_=new s.Pa4,u=2*Math.PI,m={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};class b extends s.ZXd{constructor(t,e=null){super(t,e),this.state=m.NONE,this.enabled=!0,this.target=new s.Pa4,this.cursor=new s.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:s.RsA.ROTATE,MIDDLE:s.RsA.DOLLY,RIGHT:s.RsA.PAN},this.touches={ONE:s.QmN.ROTATE,TWO:s.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new s.Pa4,this._lastQuaternion=new s._fP,this._lastTargetPosition=new s.Pa4,this._quat=new s._fP().setFromUnitVectors(t.up,new s.Pa4(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s.$V,this._sphericalDelta=new s.$V,this._scale=1,this._panOffset=new s.Pa4,this._rotateStart=new s.FM8,this._rotateEnd=new s.FM8,this._rotateDelta=new s.FM8,this._panStart=new s.FM8,this._panEnd=new s.FM8,this._panDelta=new s.FM8,this._dollyStart=new s.FM8,this._dollyEnd=new s.FM8,this._dollyDelta=new s.FM8,this._dollyDirection=new s.Pa4,this._mouse=new s.FM8,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g.bind(this),this._onPointerDown=y.bind(this),this._onPointerUp=P.bind(this),this._onContextMenu=D.bind(this),this._onMouseWheel=v.bind(this),this._onKeyDown=w.bind(this),this._onTouchStart=M.bind(this),this._onTouchMove=T.bind(this),this._onMouseDown=E.bind(this),this._onMouseMove=f.bind(this),this._interceptControlDown=S.bind(this),this._interceptControlUp=O.bind(this),null!==this.domElement&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){null!==this._domElementKeyEvents&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h),this.update(),this.state=m.NONE}update(t=null){let e=this.object.position;_.copy(e).sub(this.target),_.applyQuaternion(this._quat),this._spherical.setFromVector3(_),this.autoRotate&&this.state===m.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=u:i>Math.PI&&(i-=u),o<-Math.PI?o+=u:o>Math.PI&&(o-=u),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),!0===this.enableDamping?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let t=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=t!=this._spherical.radius}if(_.setFromSpherical(this._spherical),_.applyQuaternion(this._quatInverse),e.copy(this.target).add(_),this.object.lookAt(this.target),!0===this.enableDamping?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let t=null;if(this.object.isPerspectiveCamera){let e=_.length();t=this._clampDistance(e*this._scale);let i=e-t;this.object.position.addScaledVector(this._dollyDirection,i),this.object.updateMatrixWorld(),n=!!i}else if(this.object.isOrthographicCamera){let e=new s.Pa4(this._mouse.x,this._mouse.y,0);e.unproject(this.object);let i=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=i!==this.object.zoom;let o=new s.Pa4(this._mouse.x,this._mouse.y,0);o.unproject(this.object),this.object.position.sub(o).add(e),this.object.updateMatrixWorld(),t=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;null!==t&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(t).add(this.object.position):(c.origin.copy(this.object.position),c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(c.direction))<p?this.object.lookAt(this.target):(d.setFromNormalAndCoplanarPoint(this.object.up,this.target),c.intersectPlane(d,this.target))))}else if(this.object.isOrthographicCamera){let t=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),t!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,!!(n||this._lastPosition.distanceToSquared(this.object.position)>1e-6||8*(1-this._lastQuaternion.dot(this.object.quaternion))>1e-6||this._lastTargetPosition.distanceToSquared(this.target)>1e-6)&&(this.dispatchEvent(h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0)}_getAutoRotationAngle(t){return null!==t?u/60*this.autoRotateSpeed*t:u/60/60*this.autoRotateSpeed}_getZoomScale(t){return Math.pow(.95,this.zoomSpeed*Math.abs(.01*t))}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_.setFromMatrixColumn(e,0),_.multiplyScalar(-t),this._panOffset.add(_)}_panUp(t,e){!0===this.screenSpacePanning?_.setFromMatrixColumn(e,1):(_.setFromMatrixColumn(e,0),_.crossVectors(this.object.up,_)),_.multiplyScalar(t),this._panOffset.add(_)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;_.copy(s).sub(this.target);let o=_.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,n=i.width,a=i.height;this._mouse.x=s/n*2-1,this._mouse.y=-(o/a*2)+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(u*this._rotateDelta.x/e.clientHeight),this._rotateUp(u*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(u*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-u*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(u*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-u*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(1===this._pointers.length)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(1===this._pointers.length)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y;this._dollyStart.set(0,Math.sqrt(i*i+s*s))}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(1==this._pointers.length)this._rotateEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(u*this._rotateDelta.x/e.clientHeight),this._rotateUp(u*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(1===this._pointers.length)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y;this._dollyEnd.set(0,Math.sqrt(i*i+s*s)),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,n=(t.pageY+e.y)*.5;this._updateZoomParameters(o,n)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];void 0===e&&(e=new s.FM8,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function y(t){!1!==this.enabled&&(0===this._pointers.length&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._isTrackingPointer(t)||(this._addPointer(t),"touch"===t.pointerType?this._onTouchStart(t):this._onMouseDown(t)))}function g(t){!1!==this.enabled&&("touch"===t.pointerType?this._onTouchMove(t):this._onMouseMove(t))}function P(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(l),this.state=m.NONE;break;case 1:let e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y})}}function E(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case s.RsA.DOLLY:if(!1===this.enableZoom)return;this._handleMouseDownDolly(t),this.state=m.DOLLY;break;case s.RsA.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enablePan)return;this._handleMouseDownPan(t),this.state=m.PAN}else{if(!1===this.enableRotate)return;this._handleMouseDownRotate(t),this.state=m.ROTATE}break;case s.RsA.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enableRotate)return;this._handleMouseDownRotate(t),this.state=m.ROTATE}else{if(!1===this.enablePan)return;this._handleMouseDownPan(t),this.state=m.PAN}break;default:this.state=m.NONE}this.state!==m.NONE&&this.dispatchEvent(r)}function f(t){switch(this.state){case m.ROTATE:if(!1===this.enableRotate)return;this._handleMouseMoveRotate(t);break;case m.DOLLY:if(!1===this.enableZoom)return;this._handleMouseMoveDolly(t);break;case m.PAN:if(!1===this.enablePan)return;this._handleMouseMovePan(t)}}function v(t){!1!==this.enabled&&!1!==this.enableZoom&&this.state===m.NONE&&(t.preventDefault(),this.dispatchEvent(r),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(l))}function w(t){!1!==this.enabled&&!1!==this.enablePan&&this._handleKeyDown(t)}function M(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case s.QmN.ROTATE:if(!1===this.enableRotate)return;this._handleTouchStartRotate(t),this.state=m.TOUCH_ROTATE;break;case s.QmN.PAN:if(!1===this.enablePan)return;this._handleTouchStartPan(t),this.state=m.TOUCH_PAN;break;default:this.state=m.NONE}break;case 2:switch(this.touches.TWO){case s.QmN.DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchStartDollyPan(t),this.state=m.TOUCH_DOLLY_PAN;break;case s.QmN.DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchStartDollyRotate(t),this.state=m.TOUCH_DOLLY_ROTATE;break;default:this.state=m.NONE}break;default:this.state=m.NONE}this.state!==m.NONE&&this.dispatchEvent(r)}function T(t){switch(this._trackPointer(t),this.state){case m.TOUCH_ROTATE:if(!1===this.enableRotate)return;this._handleTouchMoveRotate(t),this.update();break;case m.TOUCH_PAN:if(!1===this.enablePan)return;this._handleTouchMovePan(t),this.update();break;case m.TOUCH_DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchMoveDollyPan(t),this.update();break;case m.TOUCH_DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=m.NONE}}function D(t){!1!==this.enabled&&t.preventDefault()}function S(t){"Control"===t.key&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O(t){"Control"===t.key&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let R=document.getElementById("webgl");if(!R)throw Error("No canvas found");let j=new s.xsS,A={width:window.innerWidth,height:window.innerHeight},x=new s.cPb(75,A.width/A.height,.1,100);x.position.z=6.5,j.add(x),new b(x,R).enableDamping=!0;let N=new s.CP7({canvas:R,alpha:!0});N.setSize(window.innerWidth,window.innerHeight),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),window.addEventListener("resize",()=>{A.width=window.innerWidth,A.height=window.innerHeight,x.aspect=A.width/A.height,x.updateProjectionMatrix(),N.setSize(A.width,A.height),N.setPixelRatio(Math.min(window.devicePixelRatio,2))});let L=()=>{N.render(j,x),window.requestAnimationFrame(L)},k=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random())*e+t},C=new s.dpR().load("images/matcap.png");C.colorSpace=s.KI_,new o().load("/fonts/helvetiker_regular.typeface.json",t=>{let e=new s.kaV({matcap:C});e.transparent=!0,e.opacity=.5;let i=new a("Hi, I'm Kenta!",{font:t,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center();let o=new s.Kj0(i,e);j.add(o);let n=new s.XvJ(.3,.2,32,64);for(let t=0;t<300;t++){let t=new s.Kj0(n,e);t.position.x=k(0,10),t.position.y=k(0,10),t.position.z=k(0,10),t.rotation.x=Math.random()*Math.PI,t.rotation.y=Math.random()*Math.PI;let i=Math.random();t.scale.set(i,i,i),j.add(t)}}),L()}},function(t){t.O(0,[482,205,868,46,744],function(){return t(t.s=1439)}),_N_E=t.O()}]);