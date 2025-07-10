/*
 * @overview        {MaterialesCostosPromediosComponent}
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
import { MaterialesCostosPromediosViewModel } from '../../model/materiales-costos-promedios.model';

/**
 * TODO: Description of {@code MaterialesCostosPromediosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-costos-promedios',
    templateUrl: './materiales-costos-promedios.component.html',
    standalone: false,
    styleUrls: ['./materiales-costos-promedios.component.css']
})
export class MaterialesCostosPromediosComponent extends GenericComponent<MaterialesCostosPromediosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesCostosPromediosViewModel) {
        super(entityInstance);
    }

}
