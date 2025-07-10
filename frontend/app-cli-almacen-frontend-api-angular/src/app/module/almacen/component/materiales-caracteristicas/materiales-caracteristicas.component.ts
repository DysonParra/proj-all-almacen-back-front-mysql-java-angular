/*
 * @overview        {MaterialesCaracteristicasComponent}
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
import { MaterialesCaracteristicasViewModel } from '../../model/materiales-caracteristicas.model';

/**
 * TODO: Description of {@code MaterialesCaracteristicasComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-caracteristicas',
    templateUrl: './materiales-caracteristicas.component.html',
    standalone: false,
    styleUrls: ['./materiales-caracteristicas.component.css']
})
export class MaterialesCaracteristicasComponent extends GenericComponent<MaterialesCaracteristicasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesCaracteristicasViewModel) {
        super(entityInstance);
    }

}
