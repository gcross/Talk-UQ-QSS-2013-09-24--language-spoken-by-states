headings = [ // {{{
    "Exponential blow-up",
    "Matrix product states",
    "Sum representations",
    "Regular sums",
    "Kleene's Theorem",
    "Proof of Kleene's Theorem",
] // }}}

script = function(){ return [ // {{{
  // Enanglement Blow-up {{{
    "",
    hireUseActors("b_u","b_d"),
    set(styleFor("b_d"),"opacity",0),
    set(styleFor("b_u"),"opacity",0),
    set("b_d","x",-234.16),
    set("b_u","x",234.16),
    parallel(
        fadeIn(0.5,"b_d"),
        linear(0.5,"b_d","x",0),
        fadeIn(0.5,"b_u"),
        linear(0.5,"b_u","x",0)
    ),
    "",
    hireUseActors("b_uu","b_ud","b_du","b_dd"),
    set(styleFor("b_uu"),"opacity",0),
    set(styleFor("b_ud"),"opacity",0),
    set(styleFor("b_du"),"opacity",0),
    set(styleFor("b_dd"),"opacity",0),
    set("b_uu","y",74.131),
    set("b_du","y",74.121),
    set("b_ud","y",-74.131),
    set("b_dd","y",-74.121),
    parallel(
        fadeOutAndFire(0.5,"b_u","b_d"),
        fadeIn(0.5,"b_uu"),
        linear(0.5,"b_uu","y",0),
        fadeIn(0.5,"b_ud"),
        linear(0.5,"b_ud","y",0),
        fadeIn(0.5,"b_du"),
        linear(0.5,"b_du","y",0),
        fadeIn(0.5,"b_dd"),
        linear(0.5,"b_dd","y",0)
    ),
    "",
    hireUseActors("b_uuu","b_uud","b_udu","b_udd","b_duu","b_dud","b_ddu","b_ddd"),
    set(styleFor("b_uuu"),"opacity",0),
    set(styleFor("b_uud"),"opacity",0),
    set(styleFor("b_udu"),"opacity",0),
    set(styleFor("b_udd"),"opacity",0),
    set(styleFor("b_duu"),"opacity",0),
    set(styleFor("b_dud"),"opacity",0),
    set(styleFor("b_ddu"),"opacity",0),
    set(styleFor("b_ddd"),"opacity",0),
    set("b_uuu","x",120),
    set("b_udu","x",120),
    set("b_duu","x",120),
    set("b_ddu","x",120),
    set("b_uud","x",-120),
    set("b_udd","x",-120),
    set("b_dud","x",-120),
    set("b_ddd","x",-120),
    parallel(
        fadeOutAndFire(0.5,"b_uu","b_ud","b_du","b_dd"),
        fadeIn(0.5,"b_uuu"),
        linear(0.5,"b_uuu","x",0),
        fadeIn(0.5,"b_uud"),
        linear(0.5,"b_uud","x",0),
        fadeIn(0.5,"b_udu"),
        linear(0.5,"b_udu","x",0),
        fadeIn(0.5,"b_udd"),
        linear(0.5,"b_udd","x",0),
        fadeIn(0.5,"b_duu"),
        linear(0.5,"b_duu","x",0),
        fadeIn(0.5,"b_dud"),
        linear(0.5,"b_dud","x",0),
        fadeIn(0.5,"b_ddu"),
        linear(0.5,"b_ddu","x",0),
        fadeIn(0.5,"b_ddd"),
        linear(0.5,"b_ddd","x",0)
    ),
    "",
    "",
    hireUseActors("b_uuuu","b_uuud","b_uudu","b_uudd","b_uduu","b_udud","b_uddu","b_uddd","b_duuu","b_duud","b_dudu","b_dudd","b_dduu","b_ddud","b_dddu","b_dddd"),
    set(styleFor("b_uuuu"),"opacity",0),
    set(styleFor("b_uuud"),"opacity",0),
    set(styleFor("b_uudu"),"opacity",0),
    set(styleFor("b_uudd"),"opacity",0),
    set(styleFor("b_uduu"),"opacity",0),
    set(styleFor("b_udud"),"opacity",0),
    set(styleFor("b_uddu"),"opacity",0),
    set(styleFor("b_uddd"),"opacity",0),
    set(styleFor("b_duuu"),"opacity",0),
    set(styleFor("b_duud"),"opacity",0),
    set(styleFor("b_dudu"),"opacity",0),
    set(styleFor("b_dudd"),"opacity",0),
    set(styleFor("b_dduu"),"opacity",0),
    set(styleFor("b_ddud"),"opacity",0),
    set(styleFor("b_dddu"),"opacity",0),
    set(styleFor("b_dddd"),"opacity",0),
    set("b_uuuu","y",70),
    set("b_uduu","y",70),
    set("b_duuu","y",70),
    set("b_dduu","y",70),
    set("b_uudu","y",70),
    set("b_uddu","y",70),
    set("b_dudu","y",70),
    set("b_dddu","y",70),
    set("b_uuud","y",-70),
    set("b_udud","y",-70),
    set("b_duud","y",-70),
    set("b_ddud","y",-70),
    set("b_uudd","y",-70),
    set("b_uddd","y",-70),
    set("b_dudd","y",-70),
    set("b_dddd","y",-70),
    parallel(
        fadeOutAndFire(0.5,"b_uuu","b_uud","b_udu","b_udd","b_duu","b_dud","b_ddu","b_ddd"),
        fadeIn(0.5,"b_uuuu"),
        linear(0.5,"b_uuuu","y",0),
        fadeIn(0.5,"b_uuud"),
        linear(0.5,"b_uuud","y",0),
        fadeIn(0.5,"b_uudu"),
        linear(0.5,"b_uudu","y",0),
        fadeIn(0.5,"b_uudd"),
        linear(0.5,"b_uudd","y",0),
        fadeIn(0.5,"b_uduu"),
        linear(0.5,"b_uduu","y",0),
        fadeIn(0.5,"b_udud"),
        linear(0.5,"b_udud","y",0),
        fadeIn(0.5,"b_uddu"),
        linear(0.5,"b_uddu","y",0),
        fadeIn(0.5,"b_uddd"),
        linear(0.5,"b_uddd","y",0),
        fadeIn(0.5,"b_duuu"),
        linear(0.5,"b_duuu","y",0),
        fadeIn(0.5,"b_duud"),
        linear(0.5,"b_duud","y",0),
        fadeIn(0.5,"b_dudu"),
        linear(0.5,"b_dudu","y",0),
        fadeIn(0.5,"b_dudd"),
        linear(0.5,"b_dudd","y",0),
        fadeIn(0.5,"b_dduu"),
        linear(0.5,"b_dduu","y",0),
        fadeIn(0.5,"b_ddud"),
        linear(0.5,"b_ddud","y",0),
        fadeIn(0.5,"b_dddu"),
        linear(0.5,"b_dddu","y",0),
        fadeIn(0.5,"b_dddd"),
        linear(0.5,"b_dddd","y",0)
    ),
    "",
    fadeOutAndFire(0.5,"b_uuuu","b_uuud","b_uudu","b_uudd","b_uduu","b_udud","b_uddu","b_uddd","b_duuu","b_duud","b_dudu","b_dudd","b_dduu","b_ddud","b_dddu","b_dddd"),
  // }}}
  // Matrix product states {{{
    rotateNextHeading(),
    "",
    hireAndFadeIn(0.5,"system"),
    hireAndFadeIn(0.25,"particle_1"),
    hireAndFadeIn(0.25,"particle_2"),
    hireAndFadeIn(0.25,"particle_3"),
    "",
    hireUseActor("separated_system","system"),
    fadeOutAndFire(0.5,"system"),
    "",
    hireAndFadeIn(0.5,"flow"),
    "",
    hireAndFadeIn(0.5,"braces"),
    "",
    hireAndFadeInUseActors(0.5,"col1","col2","row1","row2","incoming","outgoing"),
    "",
    fadeOutAndFire(0.5,"incoming","outgoing"),
    parallel(
        hireAndFadeInUseActors(0.5,"mpseqn","tensor-labels"),
        fadeOutAndFire(0.5,"particle_1","particle_2","particle_3")
    ),
    "",
    fadeOutAndFire(0.5,"mpseqn"),
    hireAndFadeIn(0.5,"cat_state"),
    "",
    hireAndFadeInUseActors(0.5,"matrix_0","matrix_up","matrix_cat_0","matrix_cat_up"),
    "",
    hireAndFadeIn(0.5,"flowbox"),
    "",
    hireAndFadeIn(0.5,"flow_left_1"),
    "",
    parallel(
        linear(0.5,styleFor("row2"),"opacity",0.25),
        linear(0.5,styleFor("matrix_0"),"opacity",0.25),
        linear(0.5,styleFor("matrix_cat_up"),"opacity",0.25)
    ),
    "",
    parallel(
        linear(0.5,styleFor("col2"),"opacity",0.25),
        linear(0.5,styleFor("matrix_cat_0"),"opacity",0.25)
    ),
    "",
    hireAndFadeIn(0.5,"flow_right_1"),
    "",
    hireAndFadeInUseActors(0.5,"signal","lbrow1","lbrow2","rbrow1","rbrow2","lb1","lbc","rb1","rbc"),
    "",
    parallel(
        linear(0.5,styleFor("lbrow2"),"opacity",0.25),
        linear(0.5,styleFor("lb1"),"opacity",0.25),
        linear(0.5,styleFor("rbrow2"),"opacity",0.25),
        linear(0.5,styleFor("rbc"),"opacity",0.25)
    ),
    "",
    parallel(
        linear(0.5,styleFor("lbrow2"),"opacity",1),
        linear(0.5,styleFor("lb1"),"opacity",1),
        linear(0.5,styleFor("rbrow2"),"opacity",1),
        linear(0.5,styleFor("rbc"),"opacity",1),
        linear(0.5,styleFor("matrix_cat_up"),"opacity",1),
        linear(0.5,styleFor("col2"),"opacity",1),
        linear(0.5,styleFor("row2"),"opacity",1),
        linear(0.5,styleFor("col1"),"opacity",0.25),
        linear(0.5,styleFor("row1"),"opacity",0.25),
        linear(0.5,styleFor("lbrow1"),"opacity",0.25),
        linear(0.5,styleFor("lbc"),"opacity",0.25),
        linear(0.5,styleFor("rbrow1"),"opacity",0.25),
        linear(0.5,styleFor("rb1"),"opacity",0.25),
        linear(0.5,styleFor("matrix_up"),"opacity",0.25),
        sequence(
            fadeOutAndFire(0.25,"flow_left_1","flow_right_1"),
            hireAndFadeInUseActors(0.25,"flow_left_2","flow_right_2")
        )
    ),
    "",
    parallel(
        linear(0.5,styleFor("col1"),"opacity",1),
        linear(0.5,styleFor("row1"),"opacity",1),
        linear(0.5,styleFor("lbrow1"),"opacity",1),
        linear(0.5,styleFor("lbc"),"opacity",1),
        linear(0.5,styleFor("rbrow1"),"opacity",1),
        linear(0.5,styleFor("rb1"),"opacity",1),
        linear(0.5,styleFor("matrix_0"),"opacity",1),
        linear(0.5,styleFor("matrix_cat_0"),"opacity",1),
        linear(0.5,styleFor("matrix_up"),"opacity",1),
        fadeOutAndFire(0.5,"flow_left_2","flow_right_2")
    ),
    "",
    fadeOutAndFire(0.5,"cat_state"),
    hireAndFadeIn(0.5,"W_state"),
    fadeOutAndFire(0.5,"matrix_cat_0","lb1","rb1"),
    hireAndFadeInUseActors(0.5,"matrix_W_down","lb0","rb0"),
    "",
    parallel(
        hireAndFadeIn(0.5,"flow_left_1"),
        linear(0.5,styleFor("row2"),"opacity",0.25),
        linear(0.5,styleFor("matrix_0"),"opacity",0.25),
        linear(0.5,styleFor("matrix_cat_up"),"opacity",0.25)
    ),
    "",
    parallel(
        hireAndFadeIn(0.5,"flow_right_1"),
        linear(0.5,styleFor("col2"),"opacity",0.25),
        linear(0.5,styleFor("matrix_W_down"),"opacity",0.25)
    ),
    "",
    parallel(
        sequence(
            fadeOutAndFire(0.25,"flow_right_1"),
            hireAndFadeIn(0.25,"flow_right_2")
        ),
        linear(0.5,styleFor("col2"),"opacity",1),
        linear(0.5,styleFor("matrix_W_down"),"opacity",1),
        linear(0.5,styleFor("col1"),"opacity",0.25),
        linear(0.5,styleFor("matrix_up"),"opacity",0.25)
    ),
    "",
    parallel(
        linear(0.5,styleFor("lb0"),"opacity",0.25),
        linear(0.5,styleFor("rb0"),"opacity",0.25),
        linear(0.5,styleFor("lbrow2"),"opacity",0.25),
        linear(0.5,styleFor("rbrow1"),"opacity",0.25)
    ),
    "",
    parallel(
        linear(0.5,styleFor("lb0"),"opacity",1),
        linear(0.5,styleFor("rb0"),"opacity",1),
        linear(0.5,styleFor("lbrow2"),"opacity",1),
        linear(0.5,styleFor("rbrow1"),"opacity",1)
    ),
    "",
    parallel(
        sequence(
            fadeOutAndFire(0.25,"flow_left_1"),
            hireAndFadeIn(0.25,"flow_left_2")
        ),
        linear(0.5,styleFor("matrix_W_down"),"opacity",0.25),
        linear(0.5,styleFor("matrix_cat_up"),"opacity",1),
        linear(0.5,styleFor("row1"),"opacity",0.25),
        linear(0.5,styleFor("row2"),"opacity",1)
    ),
    "",
    parallel(
        linear(0.5,styleFor("col1"),"opacity",1),
        linear(0.5,styleFor("row1"),"opacity",1),
        linear(0.5,styleFor("matrix_0"),"opacity",1),
        linear(0.5,styleFor("matrix_W_down"),"opacity",1),
        linear(0.5,styleFor("matrix_up"),"opacity",1)
    ),
    "",
    fadeOutAndFire(0.25,
        "matrix_up",
        "matrix_cat_up",
        "matrix_W_down"
    ),
    hireAndFadeIn(0.25,"matrix_op"),
    "",
    fadeOutAndFire(0.5,
        "matrix_0",
        "matrix_op",
        "W_state",
        "separated_system",
        "tensor-labels",
        "flow",
        "lbrow1",
        "lbrow2",
        "lb0",
        "lbc",
        "rbrow1",
        "rbrow2",
        "rb0",
        "rbc",
        "row1",
        "row2",
        "col1",
        "col2",
        "braces",
        "flow_left_2",
        "flow_right_2",
        "flowbox",
        "signal"
    ),
  // }}}
  // Spin representations {{{
    rotateNextHeading(),
    hireAndFadeIn(0.5,"sum-lines"),
    "",
    hireAndFadeIn(0.5,"sums-cat"),
    "",
    hireAndFadeIn(0.5,"sums-W"),
    "",
    hireAndFadeIn(0.5,"sums-W2"),
    "",
    parallel(
        sequence(
            fadeOutAndFire(0.25,"sums-cat"),
            hireAndFadeIn(0.25,"allsums-cat")
        ),
        sequence(
            wait(0.25),
            fadeOutAndFire(0.25,"sums-W"),
            hireAndFadeIn(0.25,"allsums-W")
        ),
        sequence(
            wait(0.5),
            fadeOutAndFire(0.25,"sums-W2"),
            hireAndFadeIn(0.25,"allsums-W2")
        )
    ),
    "",
    parallel(
        sequence(
            fadeOutAndFire(0.25,"allsums-cat"),
            hireAndFadeIn(0.25,"starsums-cat")
        ),
        sequence(
            wait(0.25),
            fadeOutAndFire(0.25,"allsums-W"),
            hireAndFadeIn(0.25,"starsums-W")
        ),
        sequence(
            wait(0.5),
            fadeOutAndFire(0.25,"allsums-W2"),
            hireAndFadeIn(0.25,"starsums-W2")
        )
    ),
    "",
    hireAndFadeIn(0.5,"allsums-star"),
    "",
    hireAndFadeIn(0.5,"zps"),
    "",
    hireAndFadeIn(0.5,"allsums-star-restriction"),
    "",
    fadeOutAndFire(0.5,"starsums-cat","starsums-W","starsums-W2"),
    "",
    hireAndFadeIn(0.5,"starsums-magfield"),
    "",
    hireAndFadeIn(0.5,"starsums-spin"),
    "",
    hireAndFadeIn(0.5,"starsums-long"),
    "",
    fadeOutAndFire(0.5,
        "sum-lines",
        "allsums-star",
        "allsums-star-restriction",
        "zps",
        "starsums-magfield",
        "starsums-spin",
        "starsums-long"
    ),
  // }}}
  // Crazy examples {{{
    "",
    hireAndFadeIn(0.5,"crazy-1"),
    "",
    parallel(
        fadeOutAndFire(0.5,"crazy-1"),
        hireAndFadeIn(0.5,"crazy-2")
    ),
    "",
    fadeOutAndFire(0.5,"crazy-2"),
  // }}}
  // Regular sums {{{
    rotateNextHeading(),
    "",
    hireAndFadeIn(0.5,"regsum1"),
    "",
    hireAndFadeIn(0.5,"regsum2"),
    "",
    hireAndFadeIn(0.5,"regsum3"),
    "",
    hireAndFadeIn(0.5,"regsum4"),
    fadeOutAndFire(0.5,"regsum1","regsum2","regsum3","regsum4"),
  // }}}
  // Kleene Theorem {{{
    rotateNextHeading(),
    "",
    hireAndFadeIn(0.5,"kleene-theorem"),
    "",
    fadeOutAndFire(0.5,"kleene-theorem"),
    "",
    hireAndFadeIn(0.5,"alphabet"),
    "",
    hireAndFadeIn(0.5,"words"),
    "",
    hireAndFadeIn(0.5,"language"),
    "",
    fadeOutAndFire(0.5,"alphabet","words","language"),
  // }}}
  // Proof of Kleene's Theorem
    rotateNextHeading(),
    hireAndFadeInUseActors(0.5,"mps1","mps2"),
    "",
    hireAndFadeIn(0.5,"plus"),
    "",
    hireAndFadeInUseActors(0.5,"comboline","comboeq","sumblock","commonblocks"),
    "",
    fadeOutAndFire(0.5,"sumblock"),
    hireAndFadeInUseActor(0.5,"prodblock","commonblocks"),
  // }}}
]} // }}}
