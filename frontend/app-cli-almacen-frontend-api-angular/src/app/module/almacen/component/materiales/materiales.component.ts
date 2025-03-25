/*
 * @fileoverview    {MaterialesComponent}
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
import { MaterialesViewModel } from '../../model/materiales.model';

/**
 * TODO: Description of {@code MaterialesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales',
    templateUrl: './materiales.component.html',
    standalone: false,
    styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent extends GenericComponent<MaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesViewModel) {
        super(entityInstance);
    }

}
