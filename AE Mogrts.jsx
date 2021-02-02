// ae mogrts
generateMogrt(app.project.activeItem.layer(1), app.project.activeItem);

function generateMogrt(controllerLayer, comp) {
    comp.openInEssentialGraphics();
    for(var m = 1; m <= controllerLayer.Effects.numProperties; m++) {
        controllerLayer.effect(m).property(1).addToMotionGraphicsTemplateAs(comp, controllerLayer.effect(m).name);
        }
    
comp.motionGraphicsTemplateName = comp.name;

comp.exportAsMotionGraphicsTemplate(true, "C:\\Users\\12082\\Desktop");

    }