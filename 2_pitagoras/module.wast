(module
  (func (export "pitagoras") (param $catetoa f64) (param $catetob f64) (result f64)
    (get_local $catetoa)
    (get_local $catetoa)
    (f64.mul)
    (get_local $catetob)
    (get_local $catetob)
    (f64.mul)
    (f64.add)
    (f64.sqrt)
  )
)
