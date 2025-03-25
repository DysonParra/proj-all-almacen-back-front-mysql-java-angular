/*
 * @fileoverview    {MaterialesDescripcionesComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { MaterialesDescripcionesViewModel } from '../../model/materiales-descripciones.model';

/**
 * TODO: Description of {@code MaterialesDescripcionesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-descripciones',
    templateUrl: './materiales-descripciones.component.html',
    standalone: false,
    styleUrls: ['./materiales-descripciones.component.css']
})
export class MaterialesDescripcionesComponent extends GenericComponent<MaterialesDescripcionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesDescripcionesViewModel) {
        super(entityInstance);
    }

}
