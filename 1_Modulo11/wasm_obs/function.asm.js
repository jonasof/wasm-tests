Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var ___lock=env.___lock;
  var ___syscall6=env.___syscall6;
  var ___setErrNo=env.___setErrNo;
  var _abort=env._abort;
  var ___syscall140=env.___syscall140;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var ___syscall146=env.___syscall146;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function _Verifica_Matricula_milhao($txtMatricula) {
 $txtMatricula = $txtMatricula|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return -1;
}
function _Verifica_Matricula($txtMatricula) {
 $txtMatricula = $txtMatricula|0;
 var $0 = 0, $1 = 0, $Ix$012 = 0, $Soma$013 = 0, $add = 0, $add4 = 0, $arrayidx = 0, $arrayidx9 = 0, $call = 0, $call1 = 0, $call10 = 0, $call3 = 0, $cmp = 0, $cmp11 = 0, $cmp5 = 0, $conv = 0, $exitcond = 0, $mul = 0, $rem = 0, $retval$0 = 0;
 var $sub = 0, $sub7 = 0, $sub7$rem = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Z10is_numericPc($txtMatricula)|0);
 if ($call) {
  $call1 = (_strlen($txtMatricula)|0);
  $cmp = ($call1|0)==(8);
  if ($cmp) {
   $Ix$012 = 0;$Soma$013 = 0;
   while(1) {
    $arrayidx = (($txtMatricula) + ($Ix$012)|0);
    $0 = load1($arrayidx);
    $call3 = (__Z6to_intc($0)|0);
    $add = (($Ix$012) + 1)|0;
    $sub = (7 - ($Ix$012))|0;
    $mul = Math_imul($call3, $sub)|0;
    $add4 = (($mul) + ($Soma$013))|0;
    $exitcond = ($add|0)==(7);
    if ($exitcond) {
     break;
    } else {
     $Ix$012 = $add;$Soma$013 = $add4;
    }
   }
   $rem = (($add4|0) % 11)&-1;
   $cmp5 = ($rem|0)>(1);
   $sub7 = (11 - ($rem))|0;
   $sub7$rem = $cmp5 ? $sub7 : $rem;
   $arrayidx9 = ((($txtMatricula)) + 7|0);
   $1 = load1($arrayidx9);
   $call10 = (__Z6to_intc($1)|0);
   $cmp11 = ($sub7$rem|0)==($call10|0);
   $conv = $cmp11&1;
   $retval$0 = $conv;
  } else {
   $retval$0 = -1;
  }
 } else {
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function __Z10is_numericPc($string) {
 $string = $string|0;
 var $$off = 0, $$off11 = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $arrayidx$phi$trans$insert = 0, $call = 0, $cmp = 0, $cmp8 = 0, $inc = 0, $inc12 = 0, $strlenfirst = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $strlenfirst = load1($string);
 $cmp8 = ($strlenfirst<<24>>24)==(0);
 L1: do {
  if ($cmp8) {
   $2 = 1;
  } else {
   $$off11 = (($strlenfirst) + -48)<<24>>24;
   $0 = ($$off11&255)>(9);
   if ($0) {
    $2 = 0;
   } else {
    $call = (_strlen($string)|0);
    $inc12 = 1;
    while(1) {
     $cmp = ($inc12>>>0)<($call>>>0);
     if (!($cmp)) {
      $2 = 1;
      break L1;
     }
     $arrayidx$phi$trans$insert = (($string) + ($inc12)|0);
     $$pre = load1($arrayidx$phi$trans$insert);
     $$off = (($$pre) + -48)<<24>>24;
     $1 = ($$off&255)>(9);
     $inc = (($inc12) + 1)|0;
     if ($1) {
      $2 = 0;
      break;
     } else {
      $inc12 = $inc;
     }
    }
   }
  }
 } while(0);
 return ($2|0);
}
function __Z6to_intc($a) {
 $a = $a|0;
 var $conv = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $conv = $a << 24 >> 24;
 $sub = (($conv) + -48)|0;
 return ($sub|0);
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1396|0);
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $call2 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $call = (_dummy_595($0)|0);
 store4($vararg_buffer,$call);
 $call1 = (___syscall6(6,($vararg_buffer|0))|0);
 $call2 = (___syscall_ret($call1)|0);
 STACKTOP = sp;return ($call2|0);
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $2 = 0, $and = 0, $call = 0, $call3 = 0, $fd = 0, $lbf = 0, $tobool = 0, $tobool2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $write = 0, $wsz = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $wsz = sp + 16|0;
 $write = ((($f)) + 36|0);
 store4($write,3);
 $0 = load4($f);
 $and = $0 & 64;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $fd = ((($f)) + 60|0);
  $1 = load4($fd);
  $2 = $wsz;
  store4($vararg_buffer,$1);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,21523);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$2);
  $call = (___syscall54(54,($vararg_buffer|0))|0);
  $tobool2 = ($call|0)==(0);
  if (!($tobool2)) {
   $lbf = ((($f)) + 75|0);
   store1($lbf,-1);
  }
 }
 $call3 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($call3|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $1 = $ret;
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$1);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  store4($ret,-1);
  $2 = -1;
 } else {
  $$pre = load4($ret);
  $2 = $$pre;
 }
 STACKTOP = sp;return ($2|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $call = 0, $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  $call = (___errno_location()|0);
  store4($call,$sub);
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function ___errno_location() {
 var $call = 0, $errno_val = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___pthread_self_701()|0);
 $errno_val = ((($call)) + 64|0);
 return ($errno_val|0);
}
function ___pthread_self_701() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_pthread_self()|0);
 return ($call|0);
}
function _pthread_self() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1148|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr32 = 0, $buf8 = 0, $buf_size = 0, $call = 0, $call40 = 0;
 var $call7 = 0, $call741 = 0, $call746 = 0, $cmp = 0, $cmp12 = 0, $cmp17 = 0, $cmp24 = 0, $cmp42 = 0, $cnt$0 = 0, $dec = 0, $fd = 0, $incdec$ptr = 0, $iov$043 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0, $iov_len19 = 0, $iov_len23 = 0, $iov_len3 = 0, $iov_len36 = 0;
 var $iovcnt$045 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$044 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $sub28 = 0, $sub37 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend14 = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = load4($wbase);
 store4($iovs,$0);
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($1) - ($0))|0;
 store4($iov_len,$sub$ptr$sub);
 $iov_base2 = ((($iovs)) + 8|0);
 store4($iov_base2,$buf);
 $iov_len3 = ((($iovs)) + 12|0);
 store4($iov_len3,$len);
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd = ((($f)) + 60|0);
 $2 = load4($fd);
 $3 = $iovs;
 store4($vararg_buffer,$2);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$3);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,2);
 $call40 = (___syscall146(146,($vararg_buffer|0))|0);
 $call741 = (___syscall_ret($call40)|0);
 $cmp42 = ($add|0)==($call741|0);
 L1: do {
  if ($cmp42) {
   label = 3;
  } else {
   $call746 = $call741;$iov$043 = $iovs;$iovcnt$045 = 2;$rem$044 = $add;
   while(1) {
    $cmp12 = ($call746|0)<(0);
    if ($cmp12) {
     break;
    }
    $sub21 = (($rem$044) - ($call746))|0;
    $iov_len23 = ((($iov$043)) + 4|0);
    $8 = load4($iov_len23);
    $cmp24 = ($call746>>>0)>($8>>>0);
    $incdec$ptr = ((($iov$043)) + 8|0);
    $iov$1 = $cmp24 ? $incdec$ptr : $iov$043;
    $dec = $cmp24 << 31 >> 31;
    $iovcnt$1 = (($dec) + ($iovcnt$045))|0;
    $sub28 = $cmp24 ? $8 : 0;
    $cnt$0 = (($call746) - ($sub28))|0;
    $9 = load4($iov$1);
    $add$ptr32 = (($9) + ($cnt$0)|0);
    store4($iov$1,$add$ptr32);
    $iov_len36 = ((($iov$1)) + 4|0);
    $10 = load4($iov_len36);
    $sub37 = (($10) - ($cnt$0))|0;
    store4($iov_len36,$sub37);
    $11 = load4($fd);
    $12 = $iov$1;
    store4($vararg_buffer3,$11);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$12);
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    store4($vararg_ptr7,$iovcnt$1);
    $call = (___syscall146(146,($vararg_buffer3|0))|0);
    $call7 = (___syscall_ret($call)|0);
    $cmp = ($sub21|0)==($call7|0);
    if ($cmp) {
     label = 3;
     break L1;
    } else {
     $call746 = $call7;$iov$043 = $iov$1;$iovcnt$045 = $iovcnt$1;$rem$044 = $sub21;
    }
   }
   $wend14 = ((($f)) + 16|0);
   store4($wend14,0);
   store4($wbase,0);
   store4($wpos,0);
   $6 = load4($f);
   $or = $6 | 32;
   store4($f,$or);
   $cmp17 = ($iovcnt$045|0)==(2);
   if ($cmp17) {
    $retval$0 = 0;
   } else {
    $iov_len19 = ((($iov$043)) + 4|0);
    $7 = load4($iov_len19);
    $sub = (($len) - ($7))|0;
    $retval$0 = $sub;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $buf8 = ((($f)) + 44|0);
  $4 = load4($buf8);
  $buf_size = ((($f)) + 48|0);
  $5 = load4($buf_size);
  $add$ptr = (($4) + ($5)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  store4($wbase,$4);
  store4($wpos,$4);
  $retval$0 = $len;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _dummy_595($fd) {
 $fd = $fd|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($fd|0);
}
function _strlen($s) {
 $s = $s|0;
 var $$pn = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and3 = 0, $incdec$ptr = 0, $incdec$ptr1323 = 0, $incdec$ptr7 = 0, $lnot = 0, $neg = 0, $rem = 0, $rem13 = 0, $s$addr$0$lcssa = 0, $s$addr$015 = 0, $s$addr$1$lcssa = 0;
 var $sub = 0, $sub$ptr$lhs$cast15 = 0, $sub$ptr$lhs$cast15$sink = 0, $sub$ptr$sub17 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool1021 = 0, $tobool14 = 0, $w$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $rem13 = $0 & 3;
 $tobool14 = ($rem13|0)==(0);
 L1: do {
  if ($tobool14) {
   $s$addr$0$lcssa = $s;
   label = 4;
  } else {
   $5 = $0;$s$addr$015 = $s;
   while(1) {
    $1 = load1($s$addr$015);
    $tobool1 = ($1<<24>>24)==(0);
    if ($tobool1) {
     $sub$ptr$lhs$cast15$sink = $5;
     break L1;
    }
    $incdec$ptr = ((($s$addr$015)) + 1|0);
    $2 = $incdec$ptr;
    $rem = $2 & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $s$addr$0$lcssa = $incdec$ptr;
     label = 4;
     break;
    } else {
     $5 = $2;$s$addr$015 = $incdec$ptr;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $s$addr$0$lcssa;
  while(1) {
   $3 = load4($w$0);
   $sub = (($3) + -16843009)|0;
   $neg = $3 & -2139062144;
   $and = $neg ^ -2139062144;
   $and3 = $and & $sub;
   $lnot = ($and3|0)==(0);
   $incdec$ptr7 = ((($w$0)) + 4|0);
   if ($lnot) {
    $w$0 = $incdec$ptr7;
   } else {
    break;
   }
  }
  $4 = $3&255;
  $tobool1021 = ($4<<24>>24)==(0);
  if ($tobool1021) {
   $s$addr$1$lcssa = $w$0;
  } else {
   $$pn = $w$0;
   while(1) {
    $incdec$ptr1323 = ((($$pn)) + 1|0);
    $$pre = load1($incdec$ptr1323);
    $tobool10 = ($$pre<<24>>24)==(0);
    if ($tobool10) {
     $s$addr$1$lcssa = $incdec$ptr1323;
     break;
    } else {
     $$pn = $incdec$ptr1323;
    }
   }
  }
  $sub$ptr$lhs$cast15 = $s$addr$1$lcssa;
  $sub$ptr$lhs$cast15$sink = $sub$ptr$lhs$cast15;
 }
 $sub$ptr$sub17 = (($sub$ptr$lhs$cast15$sink) - ($0))|0;
 return ($sub$ptr$sub17|0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___ofl_lock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___lock((1460|0));
 return (1468|0);
}
function ___ofl_unlock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___unlock((1460|0));
 return;
}
function _fflush($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call11 = 0, $call118 = 0, $call17 = 0, $call23 = 0, $call7 = 0, $cmp = 0, $cmp15 = 0, $cmp21 = 0, $cond10 = 0, $cond20 = 0, $f$addr$0 = 0, $f$addr$019 = 0;
 var $f$addr$022 = 0, $lock = 0, $lock14 = 0, $next = 0, $or = 0, $phitmp = 0, $r$0$lcssa = 0, $r$021 = 0, $r$1 = 0, $retval$0 = 0, $tobool = 0, $tobool12 = 0, $tobool1220 = 0, $tobool25 = 0, $tobool5 = 0, $wbase = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($f|0)==(0|0);
 do {
  if ($tobool) {
   $1 = load4(1392);
   $tobool5 = ($1|0)==(0|0);
   if ($tobool5) {
    $cond10 = 0;
   } else {
    $2 = load4(1392);
    $call7 = (_fflush($2)|0);
    $cond10 = $call7;
   }
   $call11 = (___ofl_lock()|0);
   $f$addr$019 = load4($call11);
   $tobool1220 = ($f$addr$019|0)==(0|0);
   if ($tobool1220) {
    $r$0$lcssa = $cond10;
   } else {
    $f$addr$022 = $f$addr$019;$r$021 = $cond10;
    while(1) {
     $lock14 = ((($f$addr$022)) + 76|0);
     $3 = load4($lock14);
     $cmp15 = ($3|0)>(-1);
     if ($cmp15) {
      $call17 = (___lockfile($f$addr$022)|0);
      $cond20 = $call17;
     } else {
      $cond20 = 0;
     }
     $wpos = ((($f$addr$022)) + 20|0);
     $4 = load4($wpos);
     $wbase = ((($f$addr$022)) + 28|0);
     $5 = load4($wbase);
     $cmp21 = ($4>>>0)>($5>>>0);
     if ($cmp21) {
      $call23 = (___fflush_unlocked($f$addr$022)|0);
      $or = $call23 | $r$021;
      $r$1 = $or;
     } else {
      $r$1 = $r$021;
     }
     $tobool25 = ($cond20|0)==(0);
     if (!($tobool25)) {
      ___unlockfile($f$addr$022);
     }
     $next = ((($f$addr$022)) + 56|0);
     $f$addr$0 = load4($next);
     $tobool12 = ($f$addr$0|0)==(0|0);
     if ($tobool12) {
      $r$0$lcssa = $r$1;
      break;
     } else {
      $f$addr$022 = $f$addr$0;$r$021 = $r$1;
     }
    }
   }
   ___ofl_unlock();
   $retval$0 = $r$0$lcssa;
  } else {
   $lock = ((($f)) + 76|0);
   $0 = load4($lock);
   $cmp = ($0|0)>(-1);
   if (!($cmp)) {
    $call118 = (___fflush_unlocked($f)|0);
    $retval$0 = $call118;
    break;
   }
   $call = (___lockfile($f)|0);
   $phitmp = ($call|0)==(0);
   $call1 = (___fflush_unlocked($f)|0);
   if ($phitmp) {
    $retval$0 = $call1;
   } else {
    ___unlockfile($f);
    $retval$0 = $call1;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___fflush_unlocked($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp4 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $seek = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0;
 var $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wpos = ((($f)) + 20|0);
 $0 = load4($wpos);
 $wbase = ((($f)) + 28|0);
 $1 = load4($wbase);
 $cmp = ($0>>>0)>($1>>>0);
 if ($cmp) {
  $write = ((($f)) + 36|0);
  $2 = load4($write);
  (FUNCTION_TABLE_iiii[$2 & 3]($f,0,0)|0);
  $3 = load4($wpos);
  $tobool = ($3|0)==(0|0);
  if ($tobool) {
   $retval$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $rpos = ((($f)) + 4|0);
  $4 = load4($rpos);
  $rend = ((($f)) + 8|0);
  $5 = load4($rend);
  $cmp4 = ($4>>>0)<($5>>>0);
  if ($cmp4) {
   $sub$ptr$lhs$cast = $4;
   $sub$ptr$rhs$cast = $5;
   $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
   $seek = ((($f)) + 40|0);
   $6 = load4($seek);
   (FUNCTION_TABLE_iiii[$6 & 3]($f,$sub$ptr$sub,1)|0);
  }
  $wend = ((($f)) + 16|0);
  store4($wend,0);
  store4($wbase,0);
  store4($wpos,0);
  store4($rend,0);
  store4($rpos,0);
  $retval$0 = 0;
 }
 return ($retval$0|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i175 = 0, $$pre$i178 = 0, $$pre$i45$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i176Z2D = 0, $$pre$phi$i46$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre5$i$i = 0, $$sink$i = 0, $$sink$i$i = 0, $$sink$i154 = 0, $$sink2$i = 0, $$sink2$i172 = 0, $$sink5$i = 0, $$v$0$i = 0, $0 = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0, $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i165 = 0, $R$3$i = 0;
 var $R$3$i$i = 0, $R$3$i168 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i164 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i47$i = 0, $add$i = 0, $add$i$i = 0, $add$i145 = 0, $add$i179 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i158 = 0, $add$ptr$i16$i = 0, $add$ptr$i192 = 0, $add$ptr$i2$i$i = 0;
 var $add$ptr$i21$i = 0, $add$ptr$i49$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0, $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0;
 var $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0, $add$ptr4$i$i$i = 0, $add$ptr4$i26$i = 0, $add$ptr4$i54$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i58$i = 0, $add$ptr7$i$i = 0, $add$ptr81$i$i = 0, $add$ptr95 = 0;
 var $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0, $add17$i = 0, $add17$i182 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0;
 var $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0, $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0;
 var $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0, $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i142 = 0, $and$i17$i = 0;
 var $and$i22$i = 0, $and$i50$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0, $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i203 = 0, $and199$i = 0, $and209$i$i = 0;
 var $and21$i = 0, $and21$i148 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0, $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i24$i = 0, $and3$i52$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0;
 var $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0, $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0;
 var $and6$i$i = 0, $and6$i10$i = 0, $and6$i27$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0, $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0;
 var $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i14$i = 0, $arrayidx$i149 = 0, $arrayidx$i37$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0, $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i155 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0;
 var $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i166 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0, $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx233$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0;
 var $arrayidx27$i = 0, $arrayidx276$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0, $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i153 = 0;
 var $arrayidx96$i$i = 0, $bk = 0, $bk$i = 0, $bk$i$i = 0, $bk$i160 = 0, $bk$i35$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0, $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0;
 var $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0, $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call275$i = 0, $call37$i = 0;
 var $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i177 = 0, $cmp$i18$i = 0, $cmp$i23$i = 0, $cmp$i3$i$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0;
 var $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0;
 var $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i195 = 0, $cmp135$i = 0, $cmp137$i = 0, $cmp137$i$i = 0, $cmp137$i196 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$i = 0, $cmp142$i = 0, $cmp146 = 0, $cmp147$i = 0, $cmp14799$i = 0, $cmp15 = 0;
 var $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0, $cmp159$i = 0, $cmp159$i198 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i199 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0;
 var $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0, $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0;
 var $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0, $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0;
 var $cmp287$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0, $cmp32$i184 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0;
 var $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0, $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i152 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0;
 var $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i185 = 0, $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i186 = 0, $cmp59$i$i = 0, $cmp60$i = 0, $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i189 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0;
 var $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i190 = 0, $cmp83$i$i = 0, $cmp85$i = 0, $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0;
 var $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i150 = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i161 = 0;
 var $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0, $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0;
 var $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0, $head$i$i = 0, $head$i$i$i = 0, $head$i151 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0;
 var $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0, $head25 = 0, $head26$i$i = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0;
 var $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i169 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0;
 var $neg$i$i = 0, $neg$i170 = 0, $neg$i181 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0, $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp$i = 0, $not$cmp107$i = 0, $not$cmp114$i = 0, $not$cmp141$i = 0, $not$cmp144$i$i = 0, $not$cmp150$i$i = 0, $not$cmp205$i = 0, $not$cmp346$i$i = 0;
 var $not$cmp4$i = 0, $not$cmp418$i = 0, $not$cmp494$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i187 = 0, $or$cond1$i = 0, $or$cond1$i183 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond7$not$i = 0, $or$cond8$i = 0, $or$cond97$i = 0, $or$cond98$i = 0, $or$i = 0, $or$i$i = 0, $or$i$i$i = 0;
 var $or$i194 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0, $or23 = 0, $or232$i$i = 0;
 var $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $parent$i = 0, $parent$i$i = 0, $parent$i159 = 0, $parent$i40$i = 0;
 var $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0, $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0;
 var $rsize$0$lcssa$i = 0, $rsize$08$i = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i143 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0, $shl116$i$i = 0, $shl12 = 0;
 var $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl222$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0, $shl316$i$i = 0, $shl326$i$i = 0;
 var $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0, $shl84$i$i = 0, $shl9$i = 0;
 var $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i146 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr124$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i147 = 0, $shr19$i = 0, $shr194$i = 0, $shr20$i = 0, $shr214$i$i = 0;
 var $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr323$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0, $shr392$i = 0, $shr4$i = 0;
 var $shr42$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i141 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i144 = 0, $shr72$i = 0, $shr72$i$i = 0, $shr75$i = 0;
 var $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0, $sp$0$i$i = 0, $sp$0$i$i$i = 0;
 var $sp$0108$i = 0, $sp$1107$i = 0, $ssize$2$ph$i = 0, $sub = 0, $sub$i = 0, $sub$i138 = 0, $sub$i180 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub$ptr$sub$tsize$4$i = 0, $sub10$i = 0, $sub101$i = 0, $sub101$rsize$4$i = 0;
 var $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0, $sub31$rsize$0$i = 0, $sub313$i$i = 0;
 var $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0, $sub70$i = 0, $sub71$i$i = 0;
 var $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$796$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0, $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0;
 var $tobool97$i$i = 0, $tsize$2657583$i = 0, $tsize$4$i = 0, $tsize$795$i = 0, $v$0$i = 0, $v$0$lcssa$i = 0, $v$09$i = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$4$ph$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = load4(1472);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (1512 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = load4($1);
    $fd9 = ((($2)) + 8|0);
    $3 = load4($fd9);
    $cmp10 = ($arrayidx|0)==($3|0);
    do {
     if ($cmp10) {
      $shl12 = 1 << $add8;
      $neg13 = $shl12 ^ -1;
      $and14 = $0 & $neg13;
      store4(1472,$and14);
     } else {
      $4 = load4((1488));
      $cmp15 = ($3>>>0)<($4>>>0);
      if ($cmp15) {
       _abort();
       // unreachable;
      }
      $bk = ((($3)) + 12|0);
      $5 = load4($bk);
      $cmp16 = ($5|0)==($2|0);
      if ($cmp16) {
       store4($bk,$arrayidx);
       store4($1,$3);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $shl22 = $add8 << 3;
    $or23 = $shl22 | 3;
    $head = ((($2)) + 4|0);
    store4($head,$or23);
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $6 = load4($head25);
    $or26 = $6 | 1;
    store4($head25,$or26);
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $7 = load4((1480));
   $cmp29 = ($cond>>>0)>($7>>>0);
   if ($cmp29) {
    $cmp31 = ($shr3|0)==(0);
    if (!($cmp31)) {
     $shl35 = $shr3 << $shr;
     $shl37 = 2 << $shr;
     $sub = (0 - ($shl37))|0;
     $or40 = $shl37 | $sub;
     $and41 = $shl35 & $or40;
     $sub42 = (0 - ($and41))|0;
     $and43 = $and41 & $sub42;
     $sub44 = (($and43) + -1)|0;
     $shr45 = $sub44 >>> 12;
     $and46 = $shr45 & 16;
     $shr47 = $sub44 >>> $and46;
     $shr48 = $shr47 >>> 5;
     $and49 = $shr48 & 8;
     $add50 = $and49 | $and46;
     $shr51 = $shr47 >>> $and49;
     $shr52 = $shr51 >>> 2;
     $and53 = $shr52 & 4;
     $add54 = $add50 | $and53;
     $shr55 = $shr51 >>> $and53;
     $shr56 = $shr55 >>> 1;
     $and57 = $shr56 & 2;
     $add58 = $add54 | $and57;
     $shr59 = $shr55 >>> $and57;
     $shr60 = $shr59 >>> 1;
     $and61 = $shr60 & 1;
     $add62 = $add58 | $and61;
     $shr63 = $shr59 >>> $and61;
     $add64 = (($add62) + ($shr63))|0;
     $shl65 = $add64 << 1;
     $arrayidx66 = (1512 + ($shl65<<2)|0);
     $8 = ((($arrayidx66)) + 8|0);
     $9 = load4($8);
     $fd69 = ((($9)) + 8|0);
     $10 = load4($fd69);
     $cmp70 = ($arrayidx66|0)==($10|0);
     do {
      if ($cmp70) {
       $shl72 = 1 << $add64;
       $neg73 = $shl72 ^ -1;
       $and74 = $0 & $neg73;
       store4(1472,$and74);
       $14 = $and74;
      } else {
       $11 = load4((1488));
       $cmp76 = ($10>>>0)<($11>>>0);
       if ($cmp76) {
        _abort();
        // unreachable;
       }
       $bk78 = ((($10)) + 12|0);
       $12 = load4($bk78);
       $cmp79 = ($12|0)==($9|0);
       if ($cmp79) {
        store4($bk78,$arrayidx66);
        store4($8,$10);
        $14 = $0;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $shl90 = $add64 << 3;
     $sub91 = (($shl90) - ($cond))|0;
     $or93 = $cond | 3;
     $head94 = ((($9)) + 4|0);
     store4($head94,$or93);
     $add$ptr95 = (($9) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     store4($head97,$or96);
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     store4($add$ptr98,$sub91);
     $cmp99 = ($7|0)==(0);
     if (!($cmp99)) {
      $13 = load4((1492));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (1512 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(1472,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((1488));
       $cmp113 = ($16>>>0)<($17>>>0);
       if ($cmp113) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $15;$F104$0 = $16;
       }
      }
      store4($$pre$phiZ2D,$13);
      $bk122 = ((($F104$0)) + 12|0);
      store4($bk122,$13);
      $fd123 = ((($13)) + 8|0);
      store4($fd123,$F104$0);
      $bk124 = ((($13)) + 12|0);
      store4($bk124,$arrayidx103);
     }
     store4((1480),$sub91);
     store4((1492),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((1476));
    $cmp128 = ($18|0)==(0);
    if ($cmp128) {
     $nb$0 = $cond;
    } else {
     $sub$i = (0 - ($18))|0;
     $and$i = $18 & $sub$i;
     $sub2$i = (($and$i) + -1)|0;
     $shr$i = $sub2$i >>> 12;
     $and3$i = $shr$i & 16;
     $shr4$i = $sub2$i >>> $and3$i;
     $shr5$i = $shr4$i >>> 5;
     $and6$i = $shr5$i & 8;
     $add$i = $and6$i | $and3$i;
     $shr7$i = $shr4$i >>> $and6$i;
     $shr8$i = $shr7$i >>> 2;
     $and9$i = $shr8$i & 4;
     $add10$i = $add$i | $and9$i;
     $shr11$i = $shr7$i >>> $and9$i;
     $shr12$i = $shr11$i >>> 1;
     $and13$i = $shr12$i & 2;
     $add14$i = $add10$i | $and13$i;
     $shr15$i = $shr11$i >>> $and13$i;
     $shr16$i = $shr15$i >>> 1;
     $and17$i = $shr16$i & 1;
     $add18$i = $add14$i | $and17$i;
     $shr19$i = $shr15$i >>> $and17$i;
     $add20$i = (($add18$i) + ($shr19$i))|0;
     $arrayidx$i = (1776 + ($add20$i<<2)|0);
     $19 = load4($arrayidx$i);
     $head$i = ((($19)) + 4|0);
     $20 = load4($head$i);
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $arrayidx233$i = ((($19)) + 16|0);
     $21 = load4($arrayidx233$i);
     $not$cmp4$i = ($21|0)==(0|0);
     $$sink5$i = $not$cmp4$i&1;
     $arrayidx276$i = (((($19)) + 16|0) + ($$sink5$i<<2)|0);
     $22 = load4($arrayidx276$i);
     $cmp287$i = ($22|0)==(0|0);
     if ($cmp287$i) {
      $rsize$0$lcssa$i = $sub22$i;$v$0$lcssa$i = $19;
     } else {
      $23 = $22;$rsize$08$i = $sub22$i;$v$09$i = $19;
      while(1) {
       $head29$i = ((($23)) + 4|0);
       $24 = load4($head29$i);
       $and30$i = $24 & -8;
       $sub31$i = (($and30$i) - ($cond))|0;
       $cmp32$i = ($sub31$i>>>0)<($rsize$08$i>>>0);
       $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$08$i;
       $$v$0$i = $cmp32$i ? $23 : $v$09$i;
       $arrayidx23$i = ((($23)) + 16|0);
       $25 = load4($arrayidx23$i);
       $not$cmp$i = ($25|0)==(0|0);
       $$sink$i = $not$cmp$i&1;
       $arrayidx27$i = (((($23)) + 16|0) + ($$sink$i<<2)|0);
       $26 = load4($arrayidx27$i);
       $cmp28$i = ($26|0)==(0|0);
       if ($cmp28$i) {
        $rsize$0$lcssa$i = $sub31$rsize$0$i;$v$0$lcssa$i = $$v$0$i;
        break;
       } else {
        $23 = $26;$rsize$08$i = $sub31$rsize$0$i;$v$09$i = $$v$0$i;
       }
      }
     }
     $27 = load4((1488));
     $cmp33$i = ($v$0$lcssa$i>>>0)<($27>>>0);
     if ($cmp33$i) {
      _abort();
      // unreachable;
     }
     $add$ptr$i = (($v$0$lcssa$i) + ($cond)|0);
     $cmp35$i = ($v$0$lcssa$i>>>0)<($add$ptr$i>>>0);
     if (!($cmp35$i)) {
      _abort();
      // unreachable;
     }
     $parent$i = ((($v$0$lcssa$i)) + 24|0);
     $28 = load4($parent$i);
     $bk$i = ((($v$0$lcssa$i)) + 12|0);
     $29 = load4($bk$i);
     $cmp40$i = ($29|0)==($v$0$lcssa$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$lcssa$i)) + 20|0);
       $33 = load4($arrayidx61$i);
       $cmp62$i = ($33|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$lcssa$i)) + 16|0);
        $34 = load4($arrayidx65$i);
        $cmp66$i = ($34|0)==(0|0);
        if ($cmp66$i) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $34;$RP$1$i = $arrayidx65$i;
        }
       } else {
        $R$1$i = $33;$RP$1$i = $arrayidx61$i;
       }
       while(1) {
        $arrayidx71$i = ((($R$1$i)) + 20|0);
        $35 = load4($arrayidx71$i);
        $cmp72$i = ($35|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $35;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $36 = load4($arrayidx75$i);
        $cmp76$i = ($36|0)==(0|0);
        if ($cmp76$i) {
         break;
        } else {
         $R$1$i = $36;$RP$1$i = $arrayidx75$i;
        }
       }
       $cmp81$i = ($RP$1$i>>>0)<($27>>>0);
       if ($cmp81$i) {
        _abort();
        // unreachable;
       } else {
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$lcssa$i)) + 8|0);
       $30 = load4($fd$i);
       $cmp45$i = ($30>>>0)<($27>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($30)) + 12|0);
       $31 = load4($bk47$i);
       $cmp48$i = ($31|0)==($v$0$lcssa$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($29)) + 8|0);
       $32 = load4($fd50$i);
       $cmp51$i = ($32|0)==($v$0$lcssa$i|0);
       if ($cmp51$i) {
        store4($bk47$i,$29);
        store4($fd50$i,$30);
        $R$3$i = $29;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $cmp90$i = ($28|0)==(0|0);
     L73: do {
      if (!($cmp90$i)) {
       $index$i = ((($v$0$lcssa$i)) + 28|0);
       $37 = load4($index$i);
       $arrayidx94$i = (1776 + ($37<<2)|0);
       $38 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$lcssa$i|0)==($38|0);
       do {
        if ($cmp95$i) {
         store4($arrayidx94$i,$R$3$i);
         $cond$i = ($R$3$i|0)==(0|0);
         if ($cond$i) {
          $shl$i = 1 << $37;
          $neg$i = $shl$i ^ -1;
          $and103$i = $18 & $neg$i;
          store4((1476),$and103$i);
          break L73;
         }
        } else {
         $39 = load4((1488));
         $cmp107$i = ($28>>>0)<($39>>>0);
         if ($cmp107$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx113$i = ((($28)) + 16|0);
          $40 = load4($arrayidx113$i);
          $not$cmp114$i = ($40|0)!=($v$0$lcssa$i|0);
          $$sink2$i = $not$cmp114$i&1;
          $arrayidx121$i = (((($28)) + 16|0) + ($$sink2$i<<2)|0);
          store4($arrayidx121$i,$R$3$i);
          $cmp126$i = ($R$3$i|0)==(0|0);
          if ($cmp126$i) {
           break L73;
          } else {
           break;
          }
         }
        }
       } while(0);
       $41 = load4((1488));
       $cmp130$i = ($R$3$i>>>0)<($41>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       store4($parent135$i,$28);
       $arrayidx137$i = ((($v$0$lcssa$i)) + 16|0);
       $42 = load4($arrayidx137$i);
       $cmp138$i = ($42|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($42>>>0)<($41>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          store4($arrayidx148$i,$42);
          $parent149$i = ((($42)) + 24|0);
          store4($parent149$i,$R$3$i);
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$lcssa$i)) + 20|0);
       $43 = load4($arrayidx154$i);
       $cmp155$i = ($43|0)==(0|0);
       if (!($cmp155$i)) {
        $44 = load4((1488));
        $cmp159$i = ($43>>>0)<($44>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$43);
         $parent166$i = ((($43)) + 24|0);
         store4($parent166$i,$R$3$i);
         break;
        }
       }
      }
     } while(0);
     $cmp174$i = ($rsize$0$lcssa$i>>>0)<(16);
     if ($cmp174$i) {
      $add177$i = (($rsize$0$lcssa$i) + ($cond))|0;
      $or178$i = $add177$i | 3;
      $head179$i = ((($v$0$lcssa$i)) + 4|0);
      store4($head179$i,$or178$i);
      $add$ptr181$i = (($v$0$lcssa$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $45 = load4($head182$i);
      $or183$i = $45 | 1;
      store4($head182$i,$or183$i);
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$lcssa$i)) + 4|0);
      store4($head187$i,$or186$i);
      $or188$i = $rsize$0$lcssa$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      store4($head189$i,$or188$i);
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$lcssa$i)|0);
      store4($add$ptr190$i,$rsize$0$lcssa$i);
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $46 = load4((1492));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (1512 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $0 & $shl198$i;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $0 | $shl198$i;
        store4(1472,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $47 = ((($arrayidx196$i)) + 8|0);
        $48 = load4($47);
        $49 = load4((1488));
        $cmp208$i = ($48>>>0)<($49>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $47;$F197$0$i = $48;
        }
       }
       store4($$pre$phi$iZ2D,$46);
       $bk218$i = ((($F197$0$i)) + 12|0);
       store4($bk218$i,$46);
       $fd219$i = ((($46)) + 8|0);
       store4($fd219$i,$F197$0$i);
       $bk220$i = ((($46)) + 12|0);
       store4($bk220$i,$arrayidx196$i);
      }
      store4((1480),$rsize$0$lcssa$i);
      store4((1492),$add$ptr$i);
     }
     $add$ptr225$i = ((($v$0$lcssa$i)) + 8|0);
     $retval$0 = $add$ptr225$i;
     STACKTOP = sp;return ($retval$0|0);
    }
   } else {
    $nb$0 = $cond;
   }
  } else {
   $cmp139 = ($bytes>>>0)>(4294967231);
   if ($cmp139) {
    $nb$0 = -1;
   } else {
    $add144 = (($bytes) + 11)|0;
    $and145 = $add144 & -8;
    $50 = load4((1476));
    $cmp146 = ($50|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i138 = (0 - ($and145))|0;
     $shr$i139 = $add144 >>> 8;
     $cmp$i = ($shr$i139|0)==(0);
     if ($cmp$i) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i139) + 1048320)|0;
       $shr5$i141 = $sub4$i >>> 16;
       $and$i142 = $shr5$i141 & 8;
       $shl$i143 = $shr$i139 << $and$i142;
       $sub6$i = (($shl$i143) + 520192)|0;
       $shr7$i144 = $sub6$i >>> 16;
       $and8$i = $shr7$i144 & 4;
       $add$i145 = $and8$i | $and$i142;
       $shl9$i = $shl$i143 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i146 = $sub10$i >>> 16;
       $and12$i = $shr11$i146 & 2;
       $add13$i = $add$i145 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i147 = $shl15$i >>> 15;
       $add17$i = (($sub14$i) + ($shr16$i147))|0;
       $shl18$i = $add17$i << 1;
       $add19$i = (($add17$i) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i148 = $shr20$i & 1;
       $add22$i = $and21$i148 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i149 = (1776 + ($idx$0$i<<2)|0);
     $51 = load4($arrayidx$i149);
     $cmp24$i = ($51|0)==(0|0);
     L117: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i138;$t$2$i = 0;$v$3$i = 0;
       label = 81;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i150 = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i150;
       $rsize$0$i = $sub$i138;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i = $51;$v$0$i = 0;
       while(1) {
        $head$i151 = ((($t$0$i)) + 4|0);
        $52 = load4($head$i151);
        $and32$i = $52 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$49$i = 0;$t$48$i = $t$0$i;$v$410$i = $t$0$i;
          label = 85;
          break L117;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i;
         }
        } else {
         $rsize$1$i = $rsize$0$i;$v$1$i = $v$0$i;
        }
        $arrayidx40$i = ((($t$0$i)) + 20|0);
        $53 = load4($arrayidx40$i);
        $shr42$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i)) + 16|0) + ($shr42$i<<2)|0);
        $54 = load4($arrayidx44$i);
        $cmp45$i152 = ($53|0)==(0|0);
        $cmp46$i = ($53|0)==($54|0);
        $or$cond1$i = $cmp45$i152 | $cmp46$i;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $53;
        $cmp49$i = ($54|0)==(0|0);
        $not$cmp494$i = $cmp49$i ^ 1;
        $shl52$i = $not$cmp494$i&1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 81;
         break;
        } else {
         $rsize$0$i = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i = $54;$v$0$i = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 81) {
      $cmp55$i = ($t$2$i|0)==(0|0);
      $cmp57$i = ($v$3$i|0)==(0|0);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i = $shl60$i | $sub63$i;
       $and64$i = $50 & $or$i;
       $cmp65$i = ($and64$i|0)==(0);
       if ($cmp65$i) {
        $nb$0 = $and145;
        break;
       }
       $sub67$i = (0 - ($and64$i))|0;
       $and68$i = $and64$i & $sub67$i;
       $sub70$i = (($and68$i) + -1)|0;
       $shr72$i = $sub70$i >>> 12;
       $and73$i = $shr72$i & 16;
       $shr75$i = $sub70$i >>> $and73$i;
       $shr76$i = $shr75$i >>> 5;
       $and77$i = $shr76$i & 8;
       $add78$i = $and77$i | $and73$i;
       $shr79$i = $shr75$i >>> $and77$i;
       $shr80$i = $shr79$i >>> 2;
       $and81$i = $shr80$i & 4;
       $add82$i = $add78$i | $and81$i;
       $shr83$i = $shr79$i >>> $and81$i;
       $shr84$i = $shr83$i >>> 1;
       $and85$i = $shr84$i & 2;
       $add86$i = $add82$i | $and85$i;
       $shr87$i = $shr83$i >>> $and85$i;
       $shr88$i = $shr87$i >>> 1;
       $and89$i = $shr88$i & 1;
       $add90$i = $add86$i | $and89$i;
       $shr91$i = $shr87$i >>> $and89$i;
       $add92$i = (($add90$i) + ($shr91$i))|0;
       $arrayidx94$i153 = (1776 + ($add92$i<<2)|0);
       $55 = load4($arrayidx94$i153);
       $t$4$ph$i = $55;$v$4$ph$i = 0;
      } else {
       $t$4$ph$i = $t$2$i;$v$4$ph$i = $v$3$i;
      }
      $cmp977$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp977$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$4$ph$i;
      } else {
       $rsize$49$i = $rsize$3$i;$t$48$i = $t$4$ph$i;$v$410$i = $v$4$ph$i;
       label = 85;
      }
     }
     if ((label|0) == 85) {
      while(1) {
       label = 0;
       $head99$i = ((($t$48$i)) + 4|0);
       $56 = load4($head99$i);
       $and100$i = $56 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $57 = load4($arrayidx106$i);
       $not$cmp107$i = ($57|0)==(0|0);
       $$sink$i154 = $not$cmp107$i&1;
       $arrayidx113$i155 = (((($t$48$i)) + 16|0) + ($$sink$i154<<2)|0);
       $58 = load4($arrayidx113$i155);
       $cmp97$i = ($58|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $58;$v$410$i = $t$4$v$4$i;
        label = 85;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $59 = load4((1480));
      $sub118$i = (($59) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $60 = load4((1488));
       $cmp121$i = ($v$4$lcssa$i>>>0)<($60>>>0);
       if ($cmp121$i) {
        _abort();
        // unreachable;
       }
       $add$ptr$i158 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i158>>>0);
       if (!($cmp123$i)) {
        _abort();
        // unreachable;
       }
       $parent$i159 = ((($v$4$lcssa$i)) + 24|0);
       $61 = load4($parent$i159);
       $bk$i160 = ((($v$4$lcssa$i)) + 12|0);
       $62 = load4($bk$i160);
       $cmp128$i = ($62|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $66 = load4($arrayidx151$i);
         $cmp152$i = ($66|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $67 = load4($arrayidx155$i);
          $cmp156$i = ($67|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i168 = 0;
           break;
          } else {
           $R$1$i165 = $67;$RP$1$i164 = $arrayidx155$i;
          }
         } else {
          $R$1$i165 = $66;$RP$1$i164 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i165)) + 20|0);
          $68 = load4($arrayidx161$i);
          $cmp162$i = ($68|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i165 = $68;$RP$1$i164 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i166 = ((($R$1$i165)) + 16|0);
          $69 = load4($arrayidx165$i166);
          $cmp166$i = ($69|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i165 = $69;$RP$1$i164 = $arrayidx165$i166;
          }
         }
         $cmp171$i = ($RP$1$i164>>>0)<($60>>>0);
         if ($cmp171$i) {
          _abort();
          // unreachable;
         } else {
          store4($RP$1$i164,0);
          $R$3$i168 = $R$1$i165;
          break;
         }
        } else {
         $fd$i161 = ((($v$4$lcssa$i)) + 8|0);
         $63 = load4($fd$i161);
         $cmp133$i = ($63>>>0)<($60>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($63)) + 12|0);
         $64 = load4($bk136$i);
         $cmp137$i = ($64|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($62)) + 8|0);
         $65 = load4($fd139$i);
         $cmp140$i = ($65|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          store4($bk136$i,$62);
          store4($fd139$i,$63);
          $R$3$i168 = $62;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $cmp180$i = ($61|0)==(0|0);
       L164: do {
        if ($cmp180$i) {
         $83 = $50;
        } else {
         $index$i169 = ((($v$4$lcssa$i)) + 28|0);
         $70 = load4($index$i169);
         $arrayidx184$i = (1776 + ($70<<2)|0);
         $71 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($71|0);
         do {
          if ($cmp185$i) {
           store4($arrayidx184$i,$R$3$i168);
           $cond3$i = ($R$3$i168|0)==(0|0);
           if ($cond3$i) {
            $shl192$i = 1 << $70;
            $neg$i170 = $shl192$i ^ -1;
            $and194$i = $50 & $neg$i170;
            store4((1476),$and194$i);
            $83 = $and194$i;
            break L164;
           }
          } else {
           $72 = load4((1488));
           $cmp198$i = ($61>>>0)<($72>>>0);
           if ($cmp198$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx204$i = ((($61)) + 16|0);
            $73 = load4($arrayidx204$i);
            $not$cmp205$i = ($73|0)!=($v$4$lcssa$i|0);
            $$sink2$i172 = $not$cmp205$i&1;
            $arrayidx212$i = (((($61)) + 16|0) + ($$sink2$i172<<2)|0);
            store4($arrayidx212$i,$R$3$i168);
            $cmp217$i = ($R$3$i168|0)==(0|0);
            if ($cmp217$i) {
             $83 = $50;
             break L164;
            } else {
             break;
            }
           }
          }
         } while(0);
         $74 = load4((1488));
         $cmp221$i = ($R$3$i168>>>0)<($74>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i168)) + 24|0);
         store4($parent226$i,$61);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $75 = load4($arrayidx228$i);
         $cmp229$i = ($75|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($75>>>0)<($74>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i168)) + 16|0);
            store4($arrayidx239$i,$75);
            $parent240$i = ((($75)) + 24|0);
            store4($parent240$i,$R$3$i168);
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $76 = load4($arrayidx245$i);
         $cmp246$i = ($76|0)==(0|0);
         if ($cmp246$i) {
          $83 = $50;
         } else {
          $77 = load4((1488));
          $cmp250$i = ($76>>>0)<($77>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i168)) + 20|0);
           store4($arrayidx256$i,$76);
           $parent257$i = ((($76)) + 24|0);
           store4($parent257$i,$R$3$i168);
           $83 = $50;
           break;
          }
         }
        }
       } while(0);
       $cmp265$i = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($cmp265$i) {
         $add268$i = (($rsize$4$lcssa$i) + ($and145))|0;
         $or270$i = $add268$i | 3;
         $head271$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $78 = load4($head274$i);
         $or275$i = $78 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i158)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i158) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (1512 + ($shl288$i<<2)|0);
          $79 = load4(1472);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $79 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $79 | $shl291$i;
           store4(1472,$or297$i);
           $$pre$i175 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i176Z2D = $$pre$i175;$F290$0$i = $arrayidx289$i;
          } else {
           $80 = ((($arrayidx289$i)) + 8|0);
           $81 = load4($80);
           $82 = load4((1488));
           $cmp301$i = ($81>>>0)<($82>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i176Z2D = $80;$F290$0$i = $81;
           }
          }
          store4($$pre$phi$i176Z2D,$add$ptr$i158);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i158);
          $fd312$i = ((($add$ptr$i158)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i158)) + 12|0);
          store4($bk313$i,$arrayidx289$i);
          break;
         }
         $shr318$i = $rsize$4$lcssa$i >>> 8;
         $cmp319$i = ($shr318$i|0)==(0);
         if ($cmp319$i) {
          $I316$0$i = 0;
         } else {
          $cmp323$i = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($cmp323$i) {
           $I316$0$i = 31;
          } else {
           $sub329$i = (($shr318$i) + 1048320)|0;
           $shr330$i = $sub329$i >>> 16;
           $and331$i = $shr330$i & 8;
           $shl333$i = $shr318$i << $and331$i;
           $sub334$i = (($shl333$i) + 520192)|0;
           $shr335$i = $sub334$i >>> 16;
           $and336$i = $shr335$i & 4;
           $add337$i = $and336$i | $and331$i;
           $shl338$i = $shl333$i << $and336$i;
           $sub339$i = (($shl338$i) + 245760)|0;
           $shr340$i = $sub339$i >>> 16;
           $and341$i = $shr340$i & 2;
           $add342$i = $add337$i | $and341$i;
           $sub343$i = (14 - ($add342$i))|0;
           $shl344$i = $shl338$i << $and341$i;
           $shr345$i = $shl344$i >>> 15;
           $add346$i = (($sub343$i) + ($shr345$i))|0;
           $shl347$i = $add346$i << 1;
           $add348$i = (($add346$i) + 7)|0;
           $shr349$i = $rsize$4$lcssa$i >>> $add348$i;
           $and350$i = $shr349$i & 1;
           $add351$i = $and350$i | $shl347$i;
           $I316$0$i = $add351$i;
          }
         }
         $arrayidx355$i = (1776 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i158)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i158)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $83 & $shl362$i;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $83 | $shl362$i;
          store4((1476),$or368$i);
          store4($arrayidx355$i,$add$ptr$i158);
          $parent369$i = ((($add$ptr$i158)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i158)) + 12|0);
          store4($bk370$i,$add$ptr$i158);
          $fd371$i = ((($add$ptr$i158)) + 8|0);
          store4($fd371$i,$add$ptr$i158);
          break;
         }
         $84 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $84;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $85 = load4($head386$i);
          $and387$i = $85 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 139;
           break;
          }
          $shr392$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr392$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $86 = load4($arrayidx394$i);
          $cmp396$i = ($86|0)==(0|0);
          if ($cmp396$i) {
           label = 136;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $86;
          }
         }
         if ((label|0) == 136) {
          $87 = load4((1488));
          $cmp401$i = ($arrayidx394$i>>>0)<($87>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           store4($arrayidx394$i,$add$ptr$i158);
           $parent406$i = ((($add$ptr$i158)) + 24|0);
           store4($parent406$i,$T$0$i);
           $bk407$i = ((($add$ptr$i158)) + 12|0);
           store4($bk407$i,$add$ptr$i158);
           $fd408$i = ((($add$ptr$i158)) + 8|0);
           store4($fd408$i,$add$ptr$i158);
           break;
          }
         }
         else if ((label|0) == 139) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $88 = load4($fd416$i);
          $89 = load4((1488));
          $cmp422$i = ($88>>>0)>=($89>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($89>>>0);
          $90 = $cmp422$i & $not$cmp418$i;
          if ($90) {
           $bk429$i = ((($88)) + 12|0);
           store4($bk429$i,$add$ptr$i158);
           store4($fd416$i,$add$ptr$i158);
           $fd431$i = ((($add$ptr$i158)) + 8|0);
           store4($fd431$i,$88);
           $bk432$i = ((($add$ptr$i158)) + 12|0);
           store4($bk432$i,$T$0$i);
           $parent433$i = ((($add$ptr$i158)) + 24|0);
           store4($parent433$i,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $add$ptr441$i = ((($v$4$lcssa$i)) + 8|0);
       $retval$0 = $add$ptr441$i;
       STACKTOP = sp;return ($retval$0|0);
      } else {
       $nb$0 = $and145;
      }
     }
    }
   }
  }
 } while(0);
 $91 = load4((1480));
 $cmp156 = ($91>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($91) - ($nb$0))|0;
  $92 = load4((1492));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($92) + ($nb$0)|0);
   store4((1492),$add$ptr166);
   store4((1480),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($92)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((1480),0);
   store4((1492),0);
   $or176 = $91 | 3;
   $head177 = ((($92)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($92) + ($91)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $93 = load4($head179);
   $or180 = $93 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($92)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = load4((1484));
 $cmp186 = ($94>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($94) - ($nb$0))|0;
  store4((1484),$sub190);
  $95 = load4((1496));
  $add$ptr193 = (($95) + ($nb$0)|0);
  store4((1496),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($95)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($95)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $96 = load4(1944);
 $cmp$i177 = ($96|0)==(0);
 if ($cmp$i177) {
  store4((1952),4096);
  store4((1948),4096);
  store4((1956),-1);
  store4((1960),-1);
  store4((1964),0);
  store4((1916),0);
  $97 = $magic$i$i;
  $xor$i$i = $97 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(1944,$and6$i$i);
  $98 = 4096;
 } else {
  $$pre$i178 = load4((1952));
  $98 = $$pre$i178;
 }
 $add$i179 = (($nb$0) + 48)|0;
 $sub$i180 = (($nb$0) + 47)|0;
 $add9$i = (($98) + ($sub$i180))|0;
 $neg$i181 = (0 - ($98))|0;
 $and11$i = $add9$i & $neg$i181;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $99 = load4((1912));
 $cmp15$i = ($99|0)==(0);
 if (!($cmp15$i)) {
  $100 = load4((1904));
  $add17$i182 = (($100) + ($and11$i))|0;
  $cmp19$i = ($add17$i182>>>0)<=($100>>>0);
  $cmp21$i = ($add17$i182>>>0)>($99>>>0);
  $or$cond1$i183 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i183) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $101 = load4((1916));
 $and29$i = $101 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L244: do {
  if ($tobool30$i) {
   $102 = load4((1496));
   $cmp32$i184 = ($102|0)==(0|0);
   L246: do {
    if ($cmp32$i184) {
     label = 163;
    } else {
     $sp$0$i$i = (1920);
     while(1) {
      $103 = load4($sp$0$i$i);
      $cmp$i11$i = ($103>>>0)>($102>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $104 = load4($size$i$i);
       $add$ptr$i$i = (($103) + ($104)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($102>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $105 = load4($next$i$i);
      $cmp3$i$i = ($105|0)==(0|0);
      if ($cmp3$i$i) {
       label = 163;
       break L246;
      } else {
       $sp$0$i$i = $105;
      }
     }
     $add77$i = (($add9$i) - ($94))|0;
     $and80$i = $add77$i & $neg$i181;
     $cmp81$i190 = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i190) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $110 = load4($sp$0$i$i);
      $111 = load4($size$i$i);
      $add$ptr$i192 = (($110) + ($111)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i192|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if ($cmp89$i) {
        $tsize$2657583$i = $and80$i;
       } else {
        $tbase$796$i = $call83$i;$tsize$795$i = $and80$i;
        label = 180;
        break L244;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 171;
      }
     } else {
      $tsize$2657583$i = 0;
     }
    }
   } while(0);
   do {
    if ((label|0) == 163) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if ($cmp38$i) {
      $tsize$2657583$i = 0;
     } else {
      $106 = $call37$i;
      $107 = load4((1948));
      $sub41$i = (($107) + -1)|0;
      $and42$i = $sub41$i & $106;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($106))|0;
      $neg48$i = (0 - ($107))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($106))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $108 = load4((1904));
      $add54$i = (($and11$add51$i) + ($108))|0;
      $cmp55$i185 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i186 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i187 = $cmp55$i185 & $cmp57$i186;
      if ($or$cond$i187) {
       $109 = load4((1912));
       $cmp60$i = ($109|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($108>>>0);
        $cmp66$i189 = ($add54$i>>>0)>($109>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i189;
        if ($or$cond2$i) {
         $tsize$2657583$i = 0;
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$796$i = $call37$i;$tsize$795$i = $and11$add51$i;
        label = 180;
        break L244;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 171;
       }
      } else {
       $tsize$2657583$i = 0;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 171) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i179>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     if (!($or$cond3$i)) {
      $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
      if ($cmp118$i) {
       $tsize$2657583$i = 0;
       break;
      } else {
       $tbase$796$i = $br$2$ph$i;$tsize$795$i = $ssize$2$ph$i;
       label = 180;
       break L244;
      }
     }
     $112 = load4((1952));
     $sub99$i = (($sub$i180) - ($ssize$2$ph$i))|0;
     $add101$i = (($sub99$i) + ($112))|0;
     $neg103$i = (0 - ($112))|0;
     $and104$i = $add101$i & $neg103$i;
     $cmp105$i = ($and104$i>>>0)<(2147483647);
     if (!($cmp105$i)) {
      $tbase$796$i = $br$2$ph$i;$tsize$795$i = $ssize$2$ph$i;
      label = 180;
      break L244;
     }
     $call107$i = (_sbrk(($and104$i|0))|0);
     $cmp108$i = ($call107$i|0)==((-1)|0);
     if ($cmp108$i) {
      (_sbrk(($sub112$i|0))|0);
      $tsize$2657583$i = 0;
      break;
     } else {
      $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
      $tbase$796$i = $br$2$ph$i;$tsize$795$i = $add110$i;
      label = 180;
      break L244;
     }
    }
   } while(0);
   $113 = load4((1916));
   $or$i194 = $113 | 4;
   store4((1916),$or$i194);
   $tsize$4$i = $tsize$2657583$i;
   label = 178;
  } else {
   $tsize$4$i = 0;
   label = 178;
  }
 } while(0);
 if ((label|0) == 178) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i195 = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i195 & $cmp135$i;
   $cmp137$i196 = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i196 & $or$cond4$i;
   $sub$ptr$lhs$cast$i = $call132$i;
   $sub$ptr$rhs$cast$i = $call131$i;
   $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
   $add140$i = (($nb$0) + 40)|0;
   $cmp141$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
   $sub$ptr$sub$tsize$4$i = $cmp141$i ? $sub$ptr$sub$i : $tsize$4$i;
   $or$cond7$not$i = $or$cond7$i ^ 1;
   $cmp14799$i = ($call131$i|0)==((-1)|0);
   $not$cmp141$i = $cmp141$i ^ 1;
   $cmp147$i = $cmp14799$i | $not$cmp141$i;
   $or$cond97$i = $cmp147$i | $or$cond7$not$i;
   if (!($or$cond97$i)) {
    $tbase$796$i = $call131$i;$tsize$795$i = $sub$ptr$sub$tsize$4$i;
    label = 180;
   }
  }
 }
 if ((label|0) == 180) {
  $114 = load4((1904));
  $add150$i = (($114) + ($tsize$795$i))|0;
  store4((1904),$add150$i);
  $115 = load4((1908));
  $cmp151$i = ($add150$i>>>0)>($115>>>0);
  if ($cmp151$i) {
   store4((1908),$add150$i);
  }
  $116 = load4((1496));
  $cmp157$i = ($116|0)==(0|0);
  do {
   if ($cmp157$i) {
    $117 = load4((1488));
    $cmp159$i198 = ($117|0)==(0|0);
    $cmp162$i199 = ($tbase$796$i>>>0)<($117>>>0);
    $or$cond8$i = $cmp159$i198 | $cmp162$i199;
    if ($or$cond8$i) {
     store4((1488),$tbase$796$i);
    }
    store4((1920),$tbase$796$i);
    store4((1924),$tsize$795$i);
    store4((1932),0);
    $118 = load4(1944);
    store4((1508),$118);
    store4((1504),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (1512 + ($shl$i13$i<<2)|0);
     $119 = ((($arrayidx$i14$i)) + 12|0);
     store4($119,$arrayidx$i14$i);
     $120 = ((($arrayidx$i14$i)) + 8|0);
     store4($120,$arrayidx$i14$i);
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$795$i) + -40)|0;
    $add$ptr$i16$i = ((($tbase$796$i)) + 8|0);
    $121 = $add$ptr$i16$i;
    $and$i17$i = $121 & 7;
    $cmp$i18$i = ($and$i17$i|0)==(0);
    $122 = (0 - ($121))|0;
    $and3$i$i = $122 & 7;
    $cond$i19$i = $cmp$i18$i ? 0 : $and3$i$i;
    $add$ptr4$i$i = (($tbase$796$i) + ($cond$i19$i)|0);
    $sub5$i$i = (($sub172$i) - ($cond$i19$i))|0;
    store4((1496),$add$ptr4$i$i);
    store4((1484),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $123 = load4((1960));
    store4((1500),$123);
   } else {
    $sp$0108$i = (1920);
    while(1) {
     $124 = load4($sp$0108$i);
     $size188$i = ((($sp$0108$i)) + 4|0);
     $125 = load4($size188$i);
     $add$ptr189$i = (($124) + ($125)|0);
     $cmp190$i = ($tbase$796$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 190;
      break;
     }
     $next$i = ((($sp$0108$i)) + 8|0);
     $126 = load4($next$i);
     $cmp186$i = ($126|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0108$i = $126;
     }
    }
    if ((label|0) == 190) {
     $sflags193$i = ((($sp$0108$i)) + 12|0);
     $127 = load4($sflags193$i);
     $and194$i203 = $127 & 8;
     $tobool195$i = ($and194$i203|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($116>>>0)>=($124>>>0);
      $cmp209$i = ($116>>>0)<($tbase$796$i>>>0);
      $or$cond98$i = $cmp209$i & $cmp203$i;
      if ($or$cond98$i) {
       $add212$i = (($125) + ($tsize$795$i))|0;
       store4($size188$i,$add212$i);
       $128 = load4((1484));
       $add$ptr$i49$i = ((($116)) + 8|0);
       $129 = $add$ptr$i49$i;
       $and$i50$i = $129 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $130 = (0 - ($129))|0;
       $and3$i52$i = $130 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($116) + ($cond$i53$i)|0);
       $add215$i = (($tsize$795$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($128) + ($add215$i))|0;
       store4((1496),$add$ptr4$i54$i);
       store4((1484),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $131 = load4((1960));
       store4((1500),$131);
       break;
      }
     }
    }
    $132 = load4((1488));
    $cmp218$i = ($tbase$796$i>>>0)<($132>>>0);
    if ($cmp218$i) {
     store4((1488),$tbase$796$i);
     $147 = $tbase$796$i;
    } else {
     $147 = $132;
    }
    $add$ptr227$i = (($tbase$796$i) + ($tsize$795$i)|0);
    $sp$1107$i = (1920);
    while(1) {
     $133 = load4($sp$1107$i);
     $cmp228$i = ($133|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 198;
      break;
     }
     $next231$i = ((($sp$1107$i)) + 8|0);
     $134 = load4($next231$i);
     $cmp224$i = ($134|0)==(0|0);
     if ($cmp224$i) {
      break;
     } else {
      $sp$1107$i = $134;
     }
    }
    if ((label|0) == 198) {
     $sflags235$i = ((($sp$1107$i)) + 12|0);
     $135 = load4($sflags235$i);
     $and236$i = $135 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1107$i,$tbase$796$i);
      $size245$i = ((($sp$1107$i)) + 4|0);
      $136 = load4($size245$i);
      $add246$i = (($136) + ($tsize$795$i))|0;
      store4($size245$i,$add246$i);
      $add$ptr$i21$i = ((($tbase$796$i)) + 8|0);
      $137 = $add$ptr$i21$i;
      $and$i22$i = $137 & 7;
      $cmp$i23$i = ($and$i22$i|0)==(0);
      $138 = (0 - ($137))|0;
      $and3$i24$i = $138 & 7;
      $cond$i25$i = $cmp$i23$i ? 0 : $and3$i24$i;
      $add$ptr4$i26$i = (($tbase$796$i) + ($cond$i25$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $139 = $add$ptr5$i$i;
      $and6$i27$i = $139 & 7;
      $cmp7$i$i = ($and6$i27$i|0)==(0);
      $140 = (0 - ($139))|0;
      $and13$i$i = $140 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i28$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i29$i = $add$ptr4$i26$i;
      $sub$ptr$sub$i30$i = (($sub$ptr$lhs$cast$i28$i) - ($sub$ptr$rhs$cast$i29$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i26$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i30$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i31$i = ((($add$ptr4$i26$i)) + 4|0);
      store4($head$i31$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($116|0);
      do {
       if ($cmp20$i$i) {
        $141 = load4((1484));
        $add$i$i = (($141) + ($sub18$i$i))|0;
        store4((1484),$add$i$i);
        store4((1496),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $142 = load4((1492));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($142|0);
        if ($cmp24$i$i) {
         $143 = load4((1480));
         $add26$i$i = (($143) + ($sub18$i$i))|0;
         store4((1480),$add26$i$i);
         store4((1492),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $144 = load4($head32$i$i);
        $and33$i$i = $144 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $144 & -8;
         $shr$i34$i = $144 >>> 3;
         $cmp38$i$i = ($144>>>0)<(256);
         L314: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $145 = load4($fd$i$i);
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $146 = load4($bk$i35$i);
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (1512 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($145|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($145>>>0)<($147>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($145)) + 12|0);
             $148 = load4($bk43$i$i);
             $cmp44$i$i = ($148|0)==($add$ptr16$i$i|0);
             if ($cmp44$i$i) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $cmp46$i38$i = ($146|0)==($145|0);
           if ($cmp46$i38$i) {
            $shl48$i$i = 1 << $shr$i34$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $149 = load4(1472);
            $and49$i$i = $149 & $neg$i$i;
            store4(1472,$and49$i$i);
            break;
           }
           $cmp54$i$i = ($146|0)==($arrayidx$i37$i|0);
           do {
            if ($cmp54$i$i) {
             $$pre5$i$i = ((($146)) + 8|0);
             $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
            } else {
             $cmp57$i$i = ($146>>>0)<($147>>>0);
             if ($cmp57$i$i) {
              _abort();
              // unreachable;
             }
             $fd59$i$i = ((($146)) + 8|0);
             $150 = load4($fd59$i$i);
             $cmp60$i$i = ($150|0)==($add$ptr16$i$i|0);
             if ($cmp60$i$i) {
              $fd68$pre$phi$i$iZ2D = $fd59$i$i;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $bk67$i$i = ((($145)) + 12|0);
           store4($bk67$i$i,$146);
           store4($fd68$pre$phi$i$iZ2D,$145);
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $151 = load4($parent$i40$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $152 = load4($bk74$i$i);
           $cmp75$i$i = ($152|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $156 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($156|0)==(0|0);
             if ($cmp97$i$i) {
              $157 = load4($child$i$i);
              $cmp100$i$i = ($157|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $157;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $156;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $158 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($158|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $158;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $159 = load4($arrayidx107$i$i);
              $cmp108$i$i = ($159|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $159;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             $cmp112$i$i = ($RP$1$i$i>>>0)<($147>>>0);
             if ($cmp112$i$i) {
              _abort();
              // unreachable;
             } else {
              store4($RP$1$i$i,0);
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $153 = load4($fd78$i$i);
             $cmp81$i$i = ($153>>>0)<($147>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($153)) + 12|0);
             $154 = load4($bk82$i$i);
             $cmp83$i$i = ($154|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($152)) + 8|0);
             $155 = load4($fd85$i$i);
             $cmp86$i$i = ($155|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              store4($bk82$i$i,$152);
              store4($fd85$i$i,$153);
              $R$3$i$i = $152;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $cmp120$i42$i = ($151|0)==(0|0);
           if ($cmp120$i42$i) {
            break;
           }
           $index$i43$i = ((($add$ptr16$i$i)) + 28|0);
           $160 = load4($index$i43$i);
           $arrayidx123$i$i = (1776 + ($160<<2)|0);
           $161 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($161|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             $cond2$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $160;
             $neg132$i$i = $shl131$i$i ^ -1;
             $162 = load4((1476));
             $and133$i$i = $162 & $neg132$i$i;
             store4((1476),$and133$i$i);
             break L314;
            } else {
             $163 = load4((1488));
             $cmp137$i$i = ($151>>>0)<($163>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx143$i$i = ((($151)) + 16|0);
              $164 = load4($arrayidx143$i$i);
              $not$cmp144$i$i = ($164|0)!=($add$ptr16$i$i|0);
              $$sink$i$i = $not$cmp144$i$i&1;
              $arrayidx151$i$i = (((($151)) + 16|0) + ($$sink$i$i<<2)|0);
              store4($arrayidx151$i$i,$R$3$i$i);
              $cmp156$i$i = ($R$3$i$i|0)==(0|0);
              if ($cmp156$i$i) {
               break L314;
              } else {
               break;
              }
             }
            }
           } while(0);
           $165 = load4((1488));
           $cmp160$i$i = ($R$3$i$i>>>0)<($165>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$151);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $166 = load4($child166$i$i);
           $cmp168$i$i = ($166|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($166>>>0)<($165>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              store4($arrayidx178$i$i,$166);
              $parent179$i$i = ((($166)) + 24|0);
              store4($parent179$i$i,$R$3$i$i);
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $167 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($167|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $168 = load4((1488));
           $cmp189$i$i = ($167>>>0)<($168>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            store4($arrayidx195$i$i,$167);
            $parent196$i$i = ((($167)) + 24|0);
            store4($parent196$i$i,$R$3$i$i);
            break;
           }
          }
         } while(0);
         $add$ptr205$i$i = (($add$ptr16$i$i) + ($and37$i$i)|0);
         $add206$i$i = (($and37$i$i) + ($sub18$i$i))|0;
         $oldfirst$0$i$i = $add$ptr205$i$i;$qsize$0$i$i = $add206$i$i;
        } else {
         $oldfirst$0$i$i = $add$ptr16$i$i;$qsize$0$i$i = $sub18$i$i;
        }
        $head208$i$i = ((($oldfirst$0$i$i)) + 4|0);
        $169 = load4($head208$i$i);
        $and209$i$i = $169 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl222$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (1512 + ($shl222$i$i<<2)|0);
         $170 = load4(1472);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $170 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $170 | $shl226$i$i;
           store4(1472,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $171 = ((($arrayidx223$i$i)) + 8|0);
           $172 = load4($171);
           $173 = load4((1488));
           $cmp236$i$i = ($172>>>0)<($173>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $171;$F224$0$i$i = $172;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i46$iZ2D,$add$ptr17$i$i);
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         store4($bk246$i$i,$add$ptr17$i$i);
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd247$i$i,$F224$0$i$i);
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk248$i$i,$arrayidx223$i$i);
         break;
        }
        $shr253$i$i = $qsize$0$i$i >>> 8;
        $cmp254$i$i = ($shr253$i$i|0)==(0);
        do {
         if ($cmp254$i$i) {
          $I252$0$i$i = 0;
         } else {
          $cmp258$i$i = ($qsize$0$i$i>>>0)>(16777215);
          if ($cmp258$i$i) {
           $I252$0$i$i = 31;
           break;
          }
          $sub262$i$i = (($shr253$i$i) + 1048320)|0;
          $shr263$i$i = $sub262$i$i >>> 16;
          $and264$i$i = $shr263$i$i & 8;
          $shl265$i$i = $shr253$i$i << $and264$i$i;
          $sub266$i$i = (($shl265$i$i) + 520192)|0;
          $shr267$i$i = $sub266$i$i >>> 16;
          $and268$i$i = $shr267$i$i & 4;
          $add269$i$i = $and268$i$i | $and264$i$i;
          $shl270$i$i = $shl265$i$i << $and268$i$i;
          $sub271$i$i = (($shl270$i$i) + 245760)|0;
          $shr272$i$i = $sub271$i$i >>> 16;
          $and273$i$i = $shr272$i$i & 2;
          $add274$i$i = $add269$i$i | $and273$i$i;
          $sub275$i$i = (14 - ($add274$i$i))|0;
          $shl276$i$i = $shl270$i$i << $and273$i$i;
          $shr277$i$i = $shl276$i$i >>> 15;
          $add278$i$i = (($sub275$i$i) + ($shr277$i$i))|0;
          $shl279$i$i = $add278$i$i << 1;
          $add280$i$i = (($add278$i$i) + 7)|0;
          $shr281$i$i = $qsize$0$i$i >>> $add280$i$i;
          $and282$i$i = $shr281$i$i & 1;
          $add283$i$i = $and282$i$i | $shl279$i$i;
          $I252$0$i$i = $add283$i$i;
         }
        } while(0);
        $arrayidx287$i$i = (1776 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $174 = load4((1476));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $174 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $174 | $shl294$i$i;
         store4((1476),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $175 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $175;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $176 = load4($head317$i$i);
         $and318$i$i = $176 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 265;
          break;
         }
         $shr323$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr323$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $177 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($177|0)==(0|0);
         if ($cmp327$i$i) {
          label = 262;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $177;
         }
        }
        if ((label|0) == 262) {
         $178 = load4((1488));
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($178>>>0);
         if ($cmp332$i$i) {
          _abort();
          // unreachable;
         } else {
          store4($arrayidx325$i$i,$add$ptr17$i$i);
          $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent337$i$i,$T$0$i47$i);
          $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk338$i$i,$add$ptr17$i$i);
          $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd339$i$i,$add$ptr17$i$i);
          break;
         }
        }
        else if ((label|0) == 265) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $179 = load4($fd344$i$i);
         $180 = load4((1488));
         $cmp350$i$i = ($179>>>0)>=($180>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($180>>>0);
         $181 = $cmp350$i$i & $not$cmp346$i$i;
         if ($181) {
          $bk357$i$i = ((($179)) + 12|0);
          store4($bk357$i$i,$add$ptr17$i$i);
          store4($fd344$i$i,$add$ptr17$i$i);
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd359$i$i,$179);
          $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk360$i$i,$T$0$i47$i);
          $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent361$i$i,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $add$ptr369$i$i = ((($add$ptr4$i26$i)) + 8|0);
      $retval$0 = $add$ptr369$i$i;
      STACKTOP = sp;return ($retval$0|0);
     }
    }
    $sp$0$i$i$i = (1920);
    while(1) {
     $182 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($182>>>0)>($116>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $183 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($182) + ($183)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($116>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $184 = load4($next$i$i$i);
     $sp$0$i$i$i = $184;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $185 = $add$ptr3$i$i;
    $and$i$i = $185 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $186 = (0 - ($185))|0;
    $and6$i10$i = $186 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr81$i$i = ((($116)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr81$i$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $116 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$795$i) + -40)|0;
    $add$ptr$i2$i$i = ((($tbase$796$i)) + 8|0);
    $187 = $add$ptr$i2$i$i;
    $and$i$i$i = $187 & 7;
    $cmp$i3$i$i = ($and$i$i$i|0)==(0);
    $188 = (0 - ($187))|0;
    $and3$i$i$i = $188 & 7;
    $cond$i$i$i = $cmp$i3$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$796$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    store4((1496),$add$ptr4$i$i$i);
    store4((1484),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $189 = load4((1960));
    store4((1500),$189);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((1920),4),4); store8($add$ptr14$i$i+8 | 0,load8((1920)+8 | 0,4),4);
    store4((1920),$tbase$796$i);
    store4((1924),$tsize$795$i);
    store4((1932),0);
    store4((1928),$add$ptr14$i$i);
    $190 = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($190)) + 4|0);
     store4($add$ptr24$i$i,7);
     $head26$i$i = ((($190)) + 8|0);
     $cmp27$i$i = ($head26$i$i>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $190 = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($116|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $116;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $191 = load4($head$i$i);
     $and32$i$i = $191 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($116)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (1512 + ($shl$i$i<<2)|0);
      $192 = load4(1472);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $192 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $192 | $shl39$i$i;
       store4(1472,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $193 = ((($arrayidx$i$i)) + 8|0);
       $194 = load4($193);
       $195 = load4((1488));
       $cmp46$i$i = ($194>>>0)<($195>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $193;$F$0$i$i = $194;
       }
      }
      store4($$pre$phi$i$iZ2D,$116);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$116);
      $fd54$i$i = ((($116)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($116)) + 12|0);
      store4($bk55$i$i,$arrayidx$i$i);
      break;
     }
     $shr58$i$i = $sub$ptr$sub$i$i >>> 8;
     $cmp59$i$i = ($shr58$i$i|0)==(0);
     if ($cmp59$i$i) {
      $I57$0$i$i = 0;
     } else {
      $cmp63$i$i = ($sub$ptr$sub$i$i>>>0)>(16777215);
      if ($cmp63$i$i) {
       $I57$0$i$i = 31;
      } else {
       $sub67$i$i = (($shr58$i$i) + 1048320)|0;
       $shr68$i$i = $sub67$i$i >>> 16;
       $and69$i$i = $shr68$i$i & 8;
       $shl70$i$i = $shr58$i$i << $and69$i$i;
       $sub71$i$i = (($shl70$i$i) + 520192)|0;
       $shr72$i$i = $sub71$i$i >>> 16;
       $and73$i$i = $shr72$i$i & 4;
       $add74$i$i = $and73$i$i | $and69$i$i;
       $shl75$i$i = $shl70$i$i << $and73$i$i;
       $sub76$i$i = (($shl75$i$i) + 245760)|0;
       $shr77$i$i = $sub76$i$i >>> 16;
       $and78$i$i = $shr77$i$i & 2;
       $add79$i$i = $add74$i$i | $and78$i$i;
       $sub80$i$i = (14 - ($add79$i$i))|0;
       $shl81$i$i = $shl75$i$i << $and78$i$i;
       $shr82$i$i = $shl81$i$i >>> 15;
       $add83$i$i = (($sub80$i$i) + ($shr82$i$i))|0;
       $shl84$i$i = $add83$i$i << 1;
       $add85$i$i = (($add83$i$i) + 7)|0;
       $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i;
       $and87$i$i = $shr86$i$i & 1;
       $add88$i$i = $and87$i$i | $shl84$i$i;
       $I57$0$i$i = $add88$i$i;
      }
     }
     $arrayidx91$i$i = (1776 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($116)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($116)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr81$i$i,0);
     $196 = load4((1476));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $196 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $196 | $shl95$i$i;
      store4((1476),$or101$i$i);
      store4($arrayidx91$i$i,$116);
      $parent$i$i = ((($116)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($116)) + 12|0);
      store4($bk102$i$i,$116);
      $fd103$i$i = ((($116)) + 8|0);
      store4($fd103$i$i,$116);
      break;
     }
     $197 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $197;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $198 = load4($head118$i$i);
      $and119$i$i = $198 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 292;
       break;
      }
      $shr124$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr124$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $199 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($199|0)==(0|0);
      if ($cmp128$i$i) {
       label = 289;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $199;
      }
     }
     if ((label|0) == 289) {
      $200 = load4((1488));
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($200>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       store4($arrayidx126$i$i,$116);
       $parent138$i$i = ((($116)) + 24|0);
       store4($parent138$i$i,$T$0$i$i);
       $bk139$i$i = ((($116)) + 12|0);
       store4($bk139$i$i,$116);
       $fd140$i$i = ((($116)) + 8|0);
       store4($fd140$i$i,$116);
       break;
      }
     }
     else if ((label|0) == 292) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $201 = load4($fd148$i$i);
      $202 = load4((1488));
      $cmp153$i$i = ($201>>>0)>=($202>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($202>>>0);
      $203 = $cmp153$i$i & $not$cmp150$i$i;
      if ($203) {
       $bk158$i$i = ((($201)) + 12|0);
       store4($bk158$i$i,$116);
       store4($fd148$i$i,$116);
       $fd160$i$i = ((($116)) + 8|0);
       store4($fd160$i$i,$201);
       $bk161$i$i = ((($116)) + 12|0);
       store4($bk161$i$i,$T$0$i$i);
       $parent162$i$i = ((($116)) + 24|0);
       store4($parent162$i$i,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $204 = load4((1484));
  $cmp257$i = ($204>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($204) - ($nb$0))|0;
   store4((1484),$sub260$i);
   $205 = load4((1496));
   $add$ptr262$i = (($205) + ($nb$0)|0);
   store4((1496),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($205)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($205)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $call275$i = (___errno_location()|0);
 store4($call275$i,12);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre308 = 0, $$pre309 = 0, $$sink = 0, $$sink4 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0;
 var $9 = 0, $F510$0 = 0, $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0;
 var $add258 = 0, $add267 = 0, $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0;
 var $and545 = 0, $and549 = 0, $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0;
 var $arrayidx400 = 0, $arrayidx419 = 0, $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0;
 var $bk580 = 0, $bk611 = 0, $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0;
 var $cmp127 = 0, $cmp13 = 0, $cmp131 = 0, $cmp143 = 0, $cmp162 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0;
 var $cmp280 = 0, $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0;
 var $cmp401 = 0, $cmp413 = 0, $cmp42 = 0, $cmp432 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0;
 var $cmp605 = 0, $cmp624 = 0, $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond292 = 0, $cond293 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0;
 var $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0;
 var $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp150 = 0, $not$cmp420 = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0;
 var $parent442 = 0, $parent455 = 0, $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0;
 var $shl573 = 0, $shl590 = 0, $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr597 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0;
 var $sub589 = 0, $tobool233 = 0, $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = load4((1488));
 $cmp1 = ($add$ptr>>>0)<($0>>>0);
 if ($cmp1) {
  _abort();
  // unreachable;
 }
 $head = ((($mem)) + -4|0);
 $1 = load4($head);
 $and = $1 & 3;
 $cmp2 = ($and|0)==(1);
 if ($cmp2) {
  _abort();
  // unreachable;
 }
 $and5 = $1 & -8;
 $add$ptr6 = (($add$ptr) + ($and5)|0);
 $and8 = $1 & 1;
 $tobool9 = ($and8|0)==(0);
 L10: do {
  if ($tobool9) {
   $2 = load4($add$ptr);
   $cmp13 = ($and|0)==(0);
   if ($cmp13) {
    return;
   }
   $idx$neg = (0 - ($2))|0;
   $add$ptr16 = (($add$ptr) + ($idx$neg)|0);
   $add17 = (($2) + ($and5))|0;
   $cmp18 = ($add$ptr16>>>0)<($0>>>0);
   if ($cmp18) {
    _abort();
    // unreachable;
   }
   $3 = load4((1492));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = load4($head209);
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    $head216 = ((($add$ptr16)) + 4|0);
    $or = $add17 | 1;
    $and215 = $27 & -2;
    store4((1480),$add17);
    store4($head209,$and215);
    store4($head216,$or);
    store4($add$ptr217,$add17);
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr16)) + 12|0);
    $5 = load4($bk);
    $shl = $shr << 1;
    $arrayidx = (1512 + ($shl<<2)|0);
    $cmp29 = ($4|0)==($arrayidx|0);
    if (!($cmp29)) {
     $cmp31 = ($4>>>0)<($0>>>0);
     if ($cmp31) {
      _abort();
      // unreachable;
     }
     $bk34 = ((($4)) + 12|0);
     $6 = load4($bk34);
     $cmp35 = ($6|0)==($add$ptr16|0);
     if (!($cmp35)) {
      _abort();
      // unreachable;
     }
    }
    $cmp42 = ($5|0)==($4|0);
    if ($cmp42) {
     $shl45 = 1 << $shr;
     $neg = $shl45 ^ -1;
     $7 = load4(1472);
     $and46 = $7 & $neg;
     store4(1472,$and46);
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $cmp50 = ($5|0)==($arrayidx|0);
    if ($cmp50) {
     $$pre309 = ((($5)) + 8|0);
     $fd67$pre$phiZ2D = $$pre309;
    } else {
     $cmp53 = ($5>>>0)<($0>>>0);
     if ($cmp53) {
      _abort();
      // unreachable;
     }
     $fd56 = ((($5)) + 8|0);
     $8 = load4($fd56);
     $cmp57 = ($8|0)==($add$ptr16|0);
     if ($cmp57) {
      $fd67$pre$phiZ2D = $fd56;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk66 = ((($4)) + 12|0);
    store4($bk66,$5);
    store4($fd67$pre$phiZ2D,$4);
    $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    break;
   }
   $parent = ((($add$ptr16)) + 24|0);
   $9 = load4($parent);
   $bk73 = ((($add$ptr16)) + 12|0);
   $10 = load4($bk73);
   $cmp74 = ($10|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $14 = load4($arrayidx99);
     $cmp100 = ($14|0)==(0|0);
     if ($cmp100) {
      $15 = load4($child);
      $cmp104 = ($15|0)==(0|0);
      if ($cmp104) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $15;$RP$1 = $child;
      }
     } else {
      $R$1 = $14;$RP$1 = $arrayidx99;
     }
     while(1) {
      $arrayidx108 = ((($R$1)) + 20|0);
      $16 = load4($arrayidx108);
      $cmp109 = ($16|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $16;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $17 = load4($arrayidx113);
      $cmp114 = ($17|0)==(0|0);
      if ($cmp114) {
       break;
      } else {
       $R$1 = $17;$RP$1 = $arrayidx113;
      }
     }
     $cmp118 = ($RP$1>>>0)<($0>>>0);
     if ($cmp118) {
      _abort();
      // unreachable;
     } else {
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $11 = load4($fd78);
     $cmp80 = ($11>>>0)<($0>>>0);
     if ($cmp80) {
      _abort();
      // unreachable;
     }
     $bk82 = ((($11)) + 12|0);
     $12 = load4($bk82);
     $cmp83 = ($12|0)==($add$ptr16|0);
     if (!($cmp83)) {
      _abort();
      // unreachable;
     }
     $fd86 = ((($10)) + 8|0);
     $13 = load4($fd86);
     $cmp87 = ($13|0)==($add$ptr16|0);
     if ($cmp87) {
      store4($bk82,$10);
      store4($fd86,$11);
      $R$3 = $10;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp127 = ($9|0)==(0|0);
   if ($cmp127) {
    $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = load4($index);
    $arrayidx130 = (1776 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    do {
     if ($cmp131) {
      store4($arrayidx130,$R$3);
      $cond292 = ($R$3|0)==(0|0);
      if ($cond292) {
       $shl138 = 1 << $18;
       $neg139 = $shl138 ^ -1;
       $20 = load4((1476));
       $and140 = $20 & $neg139;
       store4((1476),$and140);
       $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
       break L10;
      }
     } else {
      $21 = load4((1488));
      $cmp143 = ($9>>>0)<($21>>>0);
      if ($cmp143) {
       _abort();
       // unreachable;
      } else {
       $arrayidx149 = ((($9)) + 16|0);
       $22 = load4($arrayidx149);
       $not$cmp150 = ($22|0)!=($add$ptr16|0);
       $$sink = $not$cmp150&1;
       $arrayidx157 = (((($9)) + 16|0) + ($$sink<<2)|0);
       store4($arrayidx157,$R$3);
       $cmp162 = ($R$3|0)==(0|0);
       if ($cmp162) {
        $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
        break L10;
       } else {
        break;
       }
      }
     }
    } while(0);
    $23 = load4((1488));
    $cmp165 = ($R$3>>>0)<($23>>>0);
    if ($cmp165) {
     _abort();
     // unreachable;
    }
    $parent170 = ((($R$3)) + 24|0);
    store4($parent170,$9);
    $child171 = ((($add$ptr16)) + 16|0);
    $24 = load4($child171);
    $cmp173 = ($24|0)==(0|0);
    do {
     if (!($cmp173)) {
      $cmp176 = ($24>>>0)<($23>>>0);
      if ($cmp176) {
       _abort();
       // unreachable;
      } else {
       $arrayidx182 = ((($R$3)) + 16|0);
       store4($arrayidx182,$24);
       $parent183 = ((($24)) + 24|0);
       store4($parent183,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx188 = ((($child171)) + 4|0);
    $25 = load4($arrayidx188);
    $cmp189 = ($25|0)==(0|0);
    if ($cmp189) {
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = load4((1488));
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      store4($arrayidx198,$25);
      $parent199 = ((($25)) + 24|0);
      store4($parent199,$R$3);
      $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
   }
  } else {
   $28 = $add$ptr;$p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($28>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  _abort();
  // unreachable;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $29 = load4($head231);
 $and232 = $29 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $29 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $30 = load4((1496));
  $cmp243 = ($add$ptr6|0)==($30|0);
  $31 = load4((1492));
  if ($cmp243) {
   $32 = load4((1484));
   $add246 = (($32) + ($psize$1))|0;
   store4((1484),$add246);
   store4((1496),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((1492),0);
   store4((1480),0);
   return;
  }
  $cmp255 = ($add$ptr6|0)==($31|0);
  if ($cmp255) {
   $33 = load4((1480));
   $add258 = (($33) + ($psize$1))|0;
   store4((1480),$add258);
   store4((1492),$28);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($28) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $29 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $29 >>> 3;
  $cmp269 = ($29>>>0)<(256);
  L108: do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = load4($bk275);
    $shl278 = $shr268 << 1;
    $arrayidx279 = (1512 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((1488));
     $cmp283 = ($34>>>0)<($36>>>0);
     if ($cmp283) {
      _abort();
      // unreachable;
     }
     $bk286 = ((($34)) + 12|0);
     $37 = load4($bk286);
     $cmp287 = ($37|0)==($add$ptr6|0);
     if (!($cmp287)) {
      _abort();
      // unreachable;
     }
    }
    $cmp296 = ($35|0)==($34|0);
    if ($cmp296) {
     $shl299 = 1 << $shr268;
     $neg300 = $shl299 ^ -1;
     $38 = load4(1472);
     $and301 = $38 & $neg300;
     store4(1472,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre308 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre308;
    } else {
     $39 = load4((1488));
     $cmp308 = ($35>>>0)<($39>>>0);
     if ($cmp308) {
      _abort();
      // unreachable;
     }
     $fd311 = ((($35)) + 8|0);
     $40 = load4($fd311);
     $cmp312 = ($40|0)==($add$ptr6|0);
     if ($cmp312) {
      $fd322$pre$phiZ2D = $fd311;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk321 = ((($34)) + 12|0);
    store4($bk321,$35);
    store4($fd322$pre$phiZ2D,$34);
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $41 = load4($parent331);
    $bk333 = ((($add$ptr6)) + 12|0);
    $42 = load4($bk333);
    $cmp334 = ($42|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $47 = load4($arrayidx362);
      $cmp363 = ($47|0)==(0|0);
      if ($cmp363) {
       $48 = load4($child361);
       $cmp368 = ($48|0)==(0|0);
       if ($cmp368) {
        $R332$3 = 0;
        break;
       } else {
        $R332$1 = $48;$RP360$1 = $child361;
       }
      } else {
       $R332$1 = $47;$RP360$1 = $arrayidx362;
      }
      while(1) {
       $arrayidx374 = ((($R332$1)) + 20|0);
       $49 = load4($arrayidx374);
       $cmp375 = ($49|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $49;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $50 = load4($arrayidx379);
       $cmp380 = ($50|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $50;$RP360$1 = $arrayidx379;
       }
      }
      $51 = load4((1488));
      $cmp386 = ($RP360$1>>>0)<($51>>>0);
      if ($cmp386) {
       _abort();
       // unreachable;
      } else {
       store4($RP360$1,0);
       $R332$3 = $R332$1;
       break;
      }
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $43 = load4($fd338);
      $44 = load4((1488));
      $cmp340 = ($43>>>0)<($44>>>0);
      if ($cmp340) {
       _abort();
       // unreachable;
      }
      $bk343 = ((($43)) + 12|0);
      $45 = load4($bk343);
      $cmp344 = ($45|0)==($add$ptr6|0);
      if (!($cmp344)) {
       _abort();
       // unreachable;
      }
      $fd347 = ((($42)) + 8|0);
      $46 = load4($fd347);
      $cmp348 = ($46|0)==($add$ptr6|0);
      if ($cmp348) {
       store4($bk343,$42);
       store4($fd347,$43);
       $R332$3 = $42;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $cmp395 = ($41|0)==(0|0);
    if (!($cmp395)) {
     $index399 = ((($add$ptr6)) + 28|0);
     $52 = load4($index399);
     $arrayidx400 = (1776 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     do {
      if ($cmp401) {
       store4($arrayidx400,$R332$3);
       $cond293 = ($R332$3|0)==(0|0);
       if ($cond293) {
        $shl408 = 1 << $52;
        $neg409 = $shl408 ^ -1;
        $54 = load4((1476));
        $and410 = $54 & $neg409;
        store4((1476),$and410);
        break L108;
       }
      } else {
       $55 = load4((1488));
       $cmp413 = ($41>>>0)<($55>>>0);
       if ($cmp413) {
        _abort();
        // unreachable;
       } else {
        $arrayidx419 = ((($41)) + 16|0);
        $56 = load4($arrayidx419);
        $not$cmp420 = ($56|0)!=($add$ptr6|0);
        $$sink4 = $not$cmp420&1;
        $arrayidx427 = (((($41)) + 16|0) + ($$sink4<<2)|0);
        store4($arrayidx427,$R332$3);
        $cmp432 = ($R332$3|0)==(0|0);
        if ($cmp432) {
         break L108;
        } else {
         break;
        }
       }
      }
     } while(0);
     $57 = load4((1488));
     $cmp435 = ($R332$3>>>0)<($57>>>0);
     if ($cmp435) {
      _abort();
      // unreachable;
     }
     $parent442 = ((($R332$3)) + 24|0);
     store4($parent442,$41);
     $child443 = ((($add$ptr6)) + 16|0);
     $58 = load4($child443);
     $cmp445 = ($58|0)==(0|0);
     do {
      if (!($cmp445)) {
       $cmp448 = ($58>>>0)<($57>>>0);
       if ($cmp448) {
        _abort();
        // unreachable;
       } else {
        $arrayidx454 = ((($R332$3)) + 16|0);
        store4($arrayidx454,$58);
        $parent455 = ((($58)) + 24|0);
        store4($parent455,$R332$3);
        break;
       }
      }
     } while(0);
     $arrayidx460 = ((($child443)) + 4|0);
     $59 = load4($arrayidx460);
     $cmp461 = ($59|0)==(0|0);
     if (!($cmp461)) {
      $60 = load4((1488));
      $cmp464 = ($59>>>0)<($60>>>0);
      if ($cmp464) {
       _abort();
       // unreachable;
      } else {
       $arrayidx470 = ((($R332$3)) + 20|0);
       store4($arrayidx470,$59);
       $parent471 = ((($59)) + 24|0);
       store4($parent471,$R332$3);
       break;
      }
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  store4($head481,$or480);
  $add$ptr482 = (($28) + ($add267)|0);
  store4($add$ptr482,$add267);
  $61 = load4((1492));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((1480),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $29 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($28) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (1512 + ($shl508<<2)|0);
  $62 = load4(1472);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(1472,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((1488));
   $cmp519 = ($64>>>0)<($65>>>0);
   if ($cmp519) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $63;$F510$0 = $64;
   }
  }
  store4($$pre$phiZ2D,$p$1);
  $bk529 = ((($F510$0)) + 12|0);
  store4($bk529,$p$1);
  $fd530 = ((($p$1)) + 8|0);
  store4($fd530,$F510$0);
  $bk531 = ((($p$1)) + 12|0);
  store4($bk531,$arrayidx509);
  return;
 }
 $shr535 = $psize$2 >>> 8;
 $cmp536 = ($shr535|0)==(0);
 if ($cmp536) {
  $I534$0 = 0;
 } else {
  $cmp540 = ($psize$2>>>0)>(16777215);
  if ($cmp540) {
   $I534$0 = 31;
  } else {
   $sub = (($shr535) + 1048320)|0;
   $shr544 = $sub >>> 16;
   $and545 = $shr544 & 8;
   $shl546 = $shr535 << $and545;
   $sub547 = (($shl546) + 520192)|0;
   $shr548 = $sub547 >>> 16;
   $and549 = $shr548 & 4;
   $add550 = $and549 | $and545;
   $shl551 = $shl546 << $and549;
   $sub552 = (($shl551) + 245760)|0;
   $shr553 = $sub552 >>> 16;
   $and554 = $shr553 & 2;
   $add555 = $add550 | $and554;
   $sub556 = (14 - ($add555))|0;
   $shl557 = $shl551 << $and554;
   $shr558 = $shl557 >>> 15;
   $add559 = (($sub556) + ($shr558))|0;
   $shl560 = $add559 << 1;
   $add561 = (($add559) + 7)|0;
   $shr562 = $psize$2 >>> $add561;
   $and563 = $shr562 & 1;
   $add564 = $and563 | $shl560;
   $I534$0 = $add564;
  }
 }
 $arrayidx567 = (1776 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((1476));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((1476),$or578);
   store4($arrayidx567,$p$1);
   $parent579 = ((($p$1)) + 24|0);
   store4($parent579,$arrayidx567);
   $bk580 = ((($p$1)) + 12|0);
   store4($bk580,$p$1);
   $fd581 = ((($p$1)) + 8|0);
   store4($fd581,$p$1);
  } else {
   $67 = load4($arrayidx567);
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $67;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $68 = load4($head591);
    $and592 = $68 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 124;
     break;
    }
    $shr597 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr597<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = load4($arrayidx599);
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 121;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 121) {
    $70 = load4((1488));
    $cmp605 = ($arrayidx599>>>0)<($70>>>0);
    if ($cmp605) {
     _abort();
     // unreachable;
    } else {
     store4($arrayidx599,$p$1);
     $parent610 = ((($p$1)) + 24|0);
     store4($parent610,$T$0);
     $bk611 = ((($p$1)) + 12|0);
     store4($bk611,$p$1);
     $fd612 = ((($p$1)) + 8|0);
     store4($fd612,$p$1);
     break;
    }
   }
   else if ((label|0) == 124) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = load4($fd620);
    $72 = load4((1488));
    $cmp624 = ($71>>>0)>=($72>>>0);
    $not$cmp621 = ($T$0>>>0)>=($72>>>0);
    $73 = $cmp624 & $not$cmp621;
    if ($73) {
     $bk631 = ((($71)) + 12|0);
     store4($bk631,$p$1);
     store4($fd620,$p$1);
     $fd633 = ((($p$1)) + 8|0);
     store4($fd633,$71);
     $bk634 = ((($p$1)) + 12|0);
     store4($bk634,$T$0);
     $parent635 = ((($p$1)) + 24|0);
     store4($parent635,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $74 = load4((1504));
 $dec = (($74) + -1)|0;
 store4((1504),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (1928);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = load4($sp$0$in$i);
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 store4((1504),-1);
 return;
}
function runPostSets() {
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}

  
function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&1](a1|0)|0;
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&3](a1|0,a2|0,a3|0)|0;
}

function b0(p0) {
 p0 = p0|0; abort(0);return 0;
}
function b1(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(1);return 0;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close];
var FUNCTION_TABLE_iiii = [b1,___stdout_write,___stdio_seek,___stdio_write];

  return { _malloc: _malloc, getTempRet0: getTempRet0, _fflush: _fflush, runPostSets: runPostSets, setTempRet0: setTempRet0, establishStackSpace: establishStackSpace, stackSave: stackSave, _memset: _memset, _sbrk: _sbrk, _emscripten_get_global_libc: _emscripten_get_global_libc, _memcpy: _memcpy, stackAlloc: stackAlloc, setThrew: setThrew, _free: _free, _Verifica_Matricula: _Verifica_Matricula, stackRestore: stackRestore, _Verifica_Matricula_milhao: _Verifica_Matricula_milhao, ___errno_location: ___errno_location, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii };
})
;